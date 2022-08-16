const mongoose = require('mongoose');
const Book = mongoose.model('Books');

exports.getAllBooks = function (req, res) {
    Book.find({}, function (err, Book) {
        if (err) res.send(err);
        res.json(Book);
    });
};

exports.getBookById = function (req, res) {
    Book.findById(req.params.bookId, function (err, Book) {
        if (err) res.send(err);
        res.json(Book);
    });
};

exports.createBook = function (req, res) {
    let newBook = new Book(req.body);
    newBook.save(function (err, Book) {
        if (err) res.send(err);
        res.json(Book);
    });
};

exports.updateBook = function (req, res) {
    Book.findOneAndUpdate({ _id: req.params.bookId },
        req.body, { new: true }, function (err, book) {
            if (err) res.send(err);
            res.json(newBook);
        });
};

exports.deleteBook = function (req, res) {
    Book.remove({ _id: req.params.bookId }, function (err, newBook) {
        if (err) res.send(err);
        res.json({ message: 'Book deleted successfully!' });
    });
};