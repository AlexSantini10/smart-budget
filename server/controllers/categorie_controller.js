const StatusCodes = require('http-status-codes');
const {get_categorie, get_categoria, create_categoria, edit_categoria, delete_categoria} = require('../db/categorie.js');
const {BadRequestError, NotFoundError, UnauthorizedError} = require('../errors');

const getCategorie = async (req, res) => {
    const user_id = req.user.ID;
    const categorie = await get_categorie(user_id);
    res.status(StatusCodes.OK).json(categorie);
}

const getCategoria = async (req, res) => {
    const categoria_id = req.params.id;
    const categoria = await get_categoria(categoria_id);
    if (!categoria) {
        throw new NotFoundError('Categoria not found');
    }

    if (categoria.id_utente !== req.user.ID) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }

    res.status(StatusCodes.OK).json(categoria);
}

const createCategoria = async (req, res) => {
    const user_id = req.user.ID;
    const {nome} = req.body;
    if (!nome) {
        throw new BadRequestError('Please provide all the required fields');
    }
    await create_categoria(user_id, nome);
    res.status(StatusCodes.CREATED).send({message: 'Categoria created'});
}

const editCategoria = async (req, res) => {
    const user_id = req.user.ID;
    const categoria_id = req.params.id;
    const data_to_update = req.body;
    
    if (!categoria_id) {
        throw new BadRequestError('Please provide a categoria ID');
    }

    categoria_data = await get_categoria(categoria_id);

    if (!categoria_data) {
        throw new NotFoundError('Categoria not found');
    }

    if (categoria_data.id_utente && categoria_data.id_utente !== user_id) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }

    await edit_categoria(categoria_id, data_to_update);
    res.status(StatusCodes.OK).send({message: 'Categoria updated'});
}

const deleteCategoria = async (req, res) => {
    const user_id = req.user.ID;
    const categoria_id = req.params.id;
    const categoria = await get_categoria(categoria_id);
    if (!categoria) {
        throw new NotFoundError('Categoria not found');
    }

    if (categoria.id_utente !== user_id) {
        throw new UnauthorizedError('You are not authorized to access this resource');
    }

    await delete_categoria(categoria_id);
    res.status(StatusCodes.OK).send({message: 'Categoria deleted'});
}


module.exports = {
    getCategorie,
    getCategoria,
    createCategoria,
    editCategoria,
    deleteCategoria
}