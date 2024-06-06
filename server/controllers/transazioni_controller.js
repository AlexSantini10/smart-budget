const StatusCodes = require('http-status-codes');
const {get_transazioni, get_transazione, create_transazione, edit_transazione, delete_transazione} = require('../db/transazioni.js');
const {get_categoria} = require('../db/categorie.js');
const {get_conto} = require('../db/conti.js');
const {BadRequestError, NotFoundError, UnauthorizedError} = require('../errors');

const getTransazioni = async (req, res) => {
    const user_id = req.user.ID;
    const transazioni = await get_transazioni(user_id);
    res.status(StatusCodes.OK).json(transazioni);
}

const getTransazione = async (req, res) => {
    const transazione_id = req.params.id;
    const transazione = await get_transazione(transazione_id);
    if (!transazione) {
        throw new NotFoundError('Transazione not found');
    }

    if (transazione.id_utente !== req.user.ID) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }

    res.status(StatusCodes.OK).json(transazione);
}

const createTransazione = async (req, res) => {
    const user_id = req.user.ID;
    const {importo, nome, data, ora, tipo_movimento, id_categoria, id_conto_1, id_conto_2} = req.body;
    if (!importo || !nome || !data || !ora || !tipo_movimento || !id_categoria || !id_conto_1) {
        throw new BadRequestError('Please provide all the required fields');
    }

    if (tipo_movimento === 3 && !id_conto_2) {
        throw new BadRequestError('Please provide all the required fields');
    }
    else if (tipo_movimento !== 3 && id_conto_2) {
        throw new BadRequestError('You can provide conto 2 only for transfer type transactions');
    }

    // Check tipo_movimento è valido
    const tipo_movimento_validi = [1, 2, 3]

    if (!tipo_movimento_validi.includes(tipo_movimento)) {
        throw new BadRequestError('Tipo movimento not valid');
    }

    // Check categoria esiste
    const categoria = await get_categoria(id_categoria);
    if (!categoria) {
        throw new NotFoundError('Categoria not found');
    }
    if (categoria.id_utente !== user_id) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }

    // Check conto 1 esiste
    const conto_1 = await get_conto(id_conto_1);
    if (!conto_1) {
        throw new NotFoundError('Conto 1 not found');
    }

    if (conto_1.id_utente !== user_id) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }

    if (tipo_movimento === 3) {
        // Check conto 2 esiste
        const conto_2 = await get_conto(id_conto_2);
        if (!conto_2) {
            throw new NotFoundError('Conto 2 not found');
        }
    
        if (conto_2.id_utente !== user_id) {
            throw new UnauthorizedError('You are not authorized to access this resource');
        }
    }

    await create_transazione(user_id, importo, nome, data, ora, tipo_movimento, id_categoria, id_conto_1, id_conto_2);
    res.status(StatusCodes.CREATED).send({message: 'Transazione created'});
}

const editTransazione = async (req, res) => {
    const user_id = req.user.ID;
    const transazione_id = req.params.id;
    const data_to_update = req.body;
    
    if (!transazione_id) {
        throw new BadRequestError('Please provide a transazione ID');
    }

    transazione_data = await get_transazione(transazione_id);

    if (!transazione_data) {
        throw new NotFoundError('Transazione not found');
    }

    if (transazione_data.id_utente && transazione_data.id_utente !== user_id) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }

    await edit_transazione(transazione_id, data_to_update);
    res.status(StatusCodes.OK).send({message: 'Transazione updated'});
}

const deleteTransazione = async (req, res) => {
    const user_id = req.user.ID;
    const transazione_id = req.params.id;
    if (!transazione_id) {
        throw new BadRequestError('Please provide a transazione ID');
    }

    const transazione_data = await get_transazione(transazione_id);

    if (!transazione_data) {
        throw new NotFoundError('Transazione not found');
    }

    if (transazione_data.id_utente && transazione_data.id_utente !== user_id) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }

    await delete_transazione(transazione_id);

    res.status(StatusCodes.OK).send({message: 'Transazione deleted'});
}

module.exports = {
    getTransazioni,
    getTransazione,
    createTransazione,
    editTransazione,
    deleteTransazione
};