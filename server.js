const express = require("express")
const apps = express()
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const cookiesParser = require("cookie-parser")

// import routes
const routes = require("./src/routes")

// config dotenv
dotenv.config()

// import models Books and Users
const Books = require("./src/models/Books")
const Users = require("./src/models/Users")

// define config port and callback
const PORT = process.env.PORT
const CALLBACK = () => `Server running on port ${PORT}`

// mongoose create connection with mongodb
mongoose.connect(process.env.MONGO_CONNECTION_URL, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log(`Connected to Database and Server running on http://localhost:${PORT}/`)
})

// credentials required and next js run in port 3000
apps.use(cors({ credentials: true, origin: process.env.CLIENT_URL }))
apps.use(express.json())
apps.use(cookiesParser())
apps.use(routes)

// server listen
apps.listen(PORT, CALLBACK)