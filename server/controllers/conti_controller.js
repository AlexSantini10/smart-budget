const StatusCodes = require('http-status-codes');
const {get_conti, get_conto, create_conto, edit_conto, delete_conto} = require('../db/conti.js');
const {BadRequestError, NotFoundError, UnauthorizedError} = require('../errors');

const getConti = async (req, res) => {
    const user_id = req.user.ID;
    console.log(user_id);
    const conti = await get_conti(user_id);
    res.status(StatusCodes.OK).json(conti);
}

const getConto = async (req, res) => {
    const conto_id = req.params.id;
    console.log(conto_id);
    const conto = await get_conto(conto_id);
    if (!conto) {
        throw new NotFoundError('Conto not found');
    }

    if (conto.id_utente !== req.user.ID) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }

    res.status(StatusCodes.OK).json(conto);
}

const createConto = async (req, res) => {
    const user_id = req.user.ID;
    const {nome, saldo, valuta, inclusione_statistiche} = req.body;
    if (!nome || !saldo || !valuta || !inclusione_statistiche) {
        throw new BadRequestError('Please provide all the required fields');
    }
    await create_conto(user_id, nome, saldo, valuta, inclusione_statistiche);
    res.status(StatusCodes.CREATED).send({message: 'Conto created'});
}

const editConto = async (req, res) => {
    const user_id = req.user.ID;
    const conto_id = req.params.id;
    const data_to_update = req.body;
    
    if (!conto_id) {
        throw new BadRequestError('Please provide a conto ID');
    }

    conto_data = await get_conto(conto_id);

    if (!conto_data) {
        throw new NotFoundError('Conto not found');
    }

    if (conto_data.id_utente && conto_data.id_utente !== user_id) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }

    await edit_conto(conto_id, data_to_update);
    res.status(StatusCodes.OK).send({message: 'Conto updated'});
}

const deleteConto = async (req, res) => {
    const user_id = req.user.ID;
    const conto_id = req.params.id;

    if (!conto_id) {
        throw new BadRequestError('Please provide a conto ID');
    }

    const conto_data = await get_conto(conto_id);

    if (!conto_data) {
        throw new NotFoundError('Conto not found');
    }

    if (conto_data.id_utente && conto_data.id_utente !== user_id) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }


    await delete_conto(conto_id);
    res.status(StatusCodes.OK).send({message: 'Conto deleted'});
}

module.exports = {getConti, getConto, createConto, editConto, deleteConto};