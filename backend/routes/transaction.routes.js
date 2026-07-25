const express = require('express');
const router = express.Router();

const {getTransactions, addTransactions } = require('../controllers/transaction.controller');
const { protectRoutes } = require('../middleware/auth.middleware')

router.get('/get-transaction', protectRoutes, getTransactions);
router.post('/add-transaction', protectRoutes, addTransactions);

module.exports = router;