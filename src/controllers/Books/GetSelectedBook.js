const Books = require("../../models/Books")

const GetSelectedBook = async(request, response) => {
    try {
        const bookId = request.params.id
        const books = await Books.findById(bookId).then((data) => {
            if (!data) {
                response.status(404).json({
                    message: "Cant get selected book, maybe book not found"
                })
            } else {
                response.json({
                    status: response.statusCode,
                    api_version: "v1",
                    message: "Success Get Selected Books",
                    data: data,
                    timestamp: new Date().toUTCString(),
                })
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = GetSelectedBook