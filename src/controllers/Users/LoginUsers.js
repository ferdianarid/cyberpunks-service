const Users = require("../../models/Users")

const LoginUsers = async(request, response) => {
    try {
        const { email, password } = request.body

    } catch (error) {
        console.log(error.message)
    }
}