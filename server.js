const express = require("express")
const apps = express()
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const cookiesParser = require("cookie-parser")
const routes = require("./src/routes")

dotenv.config()

// import models
const Books = require("./src/models/Books")

// define config port and callback
const PORT = process.env.PORT
const CALLBACK = () => `Server running on port ${PORT}`

// mongoose create connection with mongodb
mongoose.connect("mongodb://localhost:27017/cyberpunks", { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log("Connected to Database")
})

// credentials required and next js run in port 3000
apps.use(cors({ credentials: true, origin: "http://localhost:3000" }))
apps.use(express.json())
apps.use(cookiesParser())
apps.use(routes)

// server listen
apps.listen(PORT, CALLBACK)