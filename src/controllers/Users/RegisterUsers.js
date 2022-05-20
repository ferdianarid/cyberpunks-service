const bcrypt = require("bcrypt")
const Users = require("../../models/Users")

const RegisterUsers = async(request, response) => {
    try {
        // Get input data and desctructure
        const { username, name, email, password, confirmPassword } = request.body

        // Check confirm password must same with password
        if (password !== confirmPassword) return response.status(403).json({
            status: response.statusCode,
            message: "Password Confirmation Failed",
            timestamp: new Date().toUTCString(),
        })

        // Generate salt
        const salt = await bcrypt.genSalt(12)

        // Hashing password with salt
        const hashPassword = await bcrypt.hash(password, salt)

        // users data
        const usersData = await new Users({
            username: username,
            name: name,
            email: email,
            password: hashPassword
        })

        // save data into mongodb
        const users = await usersData.save()

        // json response
        response.json({
            status: response.statusCode,
            api_version: "v1",
            message: "Users successfully registered",
            data: usersData,
            timestamp: new Date().toUTCString(),
        })

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = RegisterUsers