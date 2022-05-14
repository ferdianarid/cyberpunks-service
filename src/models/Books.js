const mongoose = require("mongoose")
const { Schema } = mongoose

const BookSchemas = new Schema({
    title: String,
    description: String,
    author: String,
    price: Number,
    quantity: Number,
    release: Number
}, { timestamps: true })

const Books = mongoose.model("Books", BookSchemas)

module.exports = Books