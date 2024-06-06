const express = require('express');
const {getTransazioni, getTransazione, createTransazione, editTransazione, deleteTransazione} = require('../controllers/transazioni_controller')
const auth = require('../middleware/auth.js');

const router = express.Router();

router.route('/').get(auth, getTransazioni);
router.route('/:id').get(auth, getTransazione);
router.route('/').post(auth, createTransazione);
router.route('/:id').patch(auth, editTransazione);
router.route('/:id').delete(auth, deleteTransazione);

module.exports = router;