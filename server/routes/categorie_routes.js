const express = require('express');
const {getCategorie, getCategoria, createCategoria, editCategoria, deleteCategoria} = require('../controllers/categorie_controller');
const auth = require('../middleware/auth.js');

const router = express.Router();

router.route('/').get(auth, getCategorie);
router.route('/:id').get(auth, getCategoria);
router.route('/').post(auth, createCategoria);
router.route('/:id').patch(auth, editCategoria);
router.route('/:id').delete(auth, deleteCategoria);

module.exports = router;