const autorModel = require('../models/autorModel');
const Book = require('../models/bookModel');

function getBookById(req, res) {
  Book.findById(req.params.id, (err, BookData) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(BookData);
  });
}
function getAutorInBook(req,  res) {
  Book.findOne(req.params.name, (err, book) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(book.author);
  });
}
module.exports = {
  getBookById,
  getAutorInBook,
};
