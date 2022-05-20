const Users = require("../../models/Users")

const GetSelectedUsers = async(request, response) => {
    try {
        const usersId = request.params.id
        const selectedUsers = await Users.findById(usersId).then((data) => {
            if (!data) {
                response.status(404).json({
                    status: response.statusCode,
                    message: "Cant get selected users, maybe users not found",
                    timestamp: new Date().toUTCString(),
                })
            } else {
                response.json({
                    status: response.statusCode,
                    api_version: "v1",
                    message: "Success Get Selected Users",
                    data: data,
                    timestamp: new Date().toUTCString(),
                })
            }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = GetSelectedUsers