const express = require("express")
const apps = express()
const dotenv = require("dotenv")
const cors = require("cors")
const cookiesParser = require("cookie-parser")
const routes = require("./src/routes")

const Books = require("./src/models/Books")

dotenv.config()

const PORT = process.env.PORT
const CALLBACK = () => `Server running on port ${PORT}`

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/cyberpunks", { useUnifiedTopology: true }, () => "Database Connected")

// credentials required and next js run in port 3000
apps.use(cors({ credentials: true, origin: "http://localhost:3000" }))
apps.use(express.json())
apps.use(cookiesParser())
apps.use(routes)

apps.listen(PORT, CALLBACK)