const express = require('express');
const mongoose = require('mongoose');

const Transaction = require('../models/Transaction');

async function getTransactions(req, res) {
    try {
        const transactions = await Transaction.find({
            user: req.user._id,
        }).sort({ date: -1 })
        return res.status(200).json({
            success: true,
            message: "Successfully retreieved all transactions",
            response: transactions
        })
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: "Unable to retrieve transactions",
            error: error.message
        })
    }
}
async function addTransactions(req,  res) {
    try {
        const {
            type,
            amount,
            category,
            description,
            date
        } = req.body;

        if(!type || amount === undefined) {
            return res.status(400).json({
                success: false,
                message: "Transaction and amount are required"
            });
        }
        const transaction = await Transaction.create({
            user: req.user._id,
            type,
            amount,
            category,
            description,
            date
        });
        return res.status(201).json({
            success: true,
            message: "Transaction created successfully",
            transaction
        })
    } catch(error) {
        return res.status(400).json({
            success: false,
            message: "Unable to create transactions",
            error: error.message
        })
    }
}


module.exports = {getTransactions,
                 addTransactions
                  }