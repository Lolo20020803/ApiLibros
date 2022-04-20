const Book = require('../models/bookModel');

function getBookById(req, res) {
  Book.findById(req.params.id, (err, BookData) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(BookData);
  });
}
function getAutorInBook(req, res) {
  Book.findOne(req.params.name, (err, book) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(book.author);
  });
}
function getAllBooks(req, res) {
  Book.find({ }, (err, user) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(user);
  });
}

module.exports = {
  getBookById,
  getAutorInBook,
  getAllBooks,
};
