const Books = require("../../models/Books")

const UpdateBooks = async(request, response) => {
    try {
        // Check data is empty or not
        if (!request.body) {
            return response.status(400).json({ message: "Data cant be empty" })
        }

        // Get Book Id from params
        const bookId = request.params.id

        // Get book detail
        const book = await Books.findById(bookId)

        // Update selected book base Book Id
        await Books.findOneAndUpdate(bookId, request.body, { useFindAndModify: false }).then((data) => {
                if (!data) {
                    response.status(404).json({
                        message: `Cannot update books with id ${bookId}. Maybe books was not found !`
                    });
                } else {
                    response.json({
                        status: response.statusCode,
                        api_version: "v1",
                        selected_book: { _id: book._id, title: book.title },
                        message: "Selected book was successfully updated !",
                        timestamp: new Date().toUTCString(),
                    })
                }
            })
            .catch((error) => {
                response.status(500).json({
                    message: "Error updating Books with id " + id
                });
            });
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = UpdateBooks