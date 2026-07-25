const express = require('express');
const router = express.Router();

const {getTransactions, addTransactions, deleteTransaction } = require('../controllers/transaction.controller');
const { protectRoutes } = require('../middleware/auth.middleware')

router.get('/get-transaction', protectRoutes, getTransactions);
router.post('/add-transaction', protectRoutes, addTransactions);
router.delete('/delete-transaction/:id', protectRoutes, deleteTransaction)

module.exports = router;