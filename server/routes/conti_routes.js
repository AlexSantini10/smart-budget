const express = require('express');
const {getConti, getConto, createConto, editConto, deleteConto} = require('../controllers/conti_controller');
const auth = require('../middleware/auth.js');

const router = express.Router();

router.route('/').get(auth, getConti);
router.route('/:id').get(auth, getConto);
router.route('/').post(auth, createConto);
router.route('/:id').patch(auth, editConto);
router.route('/:id').delete(auth, deleteConto);

module.exports = router;