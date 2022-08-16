module.exports = function (app) {
    const book = require('../resources/bookResource');

    app.route('/books')
        .get(book.getAllBooks)
        .post(book.createBook);

    app.route('/books/:bookId')
        .get(book.getBookById)
        .put(book.updateBook)
        .delete(book.deleteBook);

};