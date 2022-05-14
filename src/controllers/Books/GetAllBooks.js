const Books = require("../../models/Books")

const GetAllBooks = async(request, response) => {
    try {
        const books = await Books.find()
        response.json({
            status: response.statusCode,
            api_version: "v1",
            message: "Success get all books",
            data: books,
            timestamp: new Date().toUTCString()
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = GetAllBooks