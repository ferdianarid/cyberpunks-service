const Users = require("../../models/Users")

const GetAllUsers = async(request, response) => {
    try {
        const users = await Users.find()
            // json response
        response.json({
            status: response.statusCode,
            api_version: "v1",
            message: "Successfully Get All Users",
            data: users,
            timestamp: new Date().toUTCString(),
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = GetAllUsers