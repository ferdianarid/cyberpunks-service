const Books = require("../../models/Books")

const CreateBooks = async(request, response) => {
    try {
        const books = await new Books({
            title: request.body.title,
            description: request.body.description,
            price: request.body.price,
            author: request.body.author,
            release: request.body.release,
            quantity: request.body.quantity
        })
        const bookCreated = await books.save()
        response.json({
            status: response.statusCode,
            api_version: "v1",
            message: "Success Create Books",
            data: bookCreated,
            timestamp: new Date().toUTCString(),
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = CreateBooks