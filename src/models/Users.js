const mongoose = require("mongoose")
const { Schema } = mongoose

const UserSchemas = new Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    roles: String,
    company: String,
    about: String,
    country: String,
    certification: String,
    education: String,
    phone: String,
    avatar: String,
    cover: String,
    refresh_token: String
}, {
    timestamps: true
})

const Users = mongoose.model("Users", UserSchemas)

module.exports = Users