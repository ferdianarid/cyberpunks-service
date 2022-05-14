const express = require("express")
const routes = express.Router()

/** Book Controllers */
const GetAllBooks = require("../controllers/Books/GetAllBooks")
const CreateBooks = require("../controllers/Books/CreateBooks")

/** in this case , i use prefix api version v1 */

// routes get all users , pass to middleware first
routes.get("/v1/books", GetAllBooks)
routes.post("/v1/books", CreateBooks)

module.exports = routes