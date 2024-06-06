const express = require('express');
const {getConti, getConto, createConto, editConto, deleteConto, getSaldo, getSaldoTotale, getSaldoAtDate} = require('../controllers/conti_controller');
const auth = require('../middleware/auth.js');

const router = express.Router();

router.route('/saldo/:id/:data').get(auth, getSaldoAtDate);
router.route('/saldo/:id').get(auth, getSaldo);
router.route('/saldo').get(auth, getSaldoTotale);

router.route('/').get(auth, getConti);
router.route('/:id').get(auth, getConto);
router.route('/').post(auth, createConto);
router.route('/:id').patch(auth, editConto);
router.route('/:id').delete(auth, deleteConto);

module.exports = router;