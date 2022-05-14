const Books = require("../../models/Books");

const DeleteBooks = async(request, response) => {
    try {
        const bookId = request.params.id
        const books = await Books.findById(bookId)
        await Books.findByIdAndRemove(bookId).then(data => {
                if (!data) {
                    response.status(404).send({
                        message: `Cannot delete Tutorial with id ${bookId}. Maybe books was not found!`
                    });
                } else {
                    response.json({
                        status: response.statusCode,
                        api_version: "v1",
                        selected_book: { _id: books._id, title: books.title },
                        message: "Selected book was successfully deleted !",
                        timestamp: new Date().toUTCString(),
                    })
                }
            })
            .catch((error) => {
                response.status(500).send({
                    message: "Could not delete books with id " + bookId
                });
            });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = DeleteBooks