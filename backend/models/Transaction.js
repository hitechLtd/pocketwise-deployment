const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },

        type: {
            type:String,
            enum:['income', 'expense']
        },
        amount :{
            type:Number,
            required: true
        },
        category: {
            type: String,
            enum: [
                'Food $ drinks',
                'Transport',
                'Accomodation',
                'Education',
                'Entertainment',
                'Others'
            ],
            default:'Others'
        },
        description:{
            type: String,
            default: "",
            trim: true,
        },
        date: {
            type: Date,
            default: Date.now()
        },
    },
    {
        timestamps: true,
    }
);
module.exports = mongoose.model("Transaction", transactionSchema)