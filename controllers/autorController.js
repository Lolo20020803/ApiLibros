const Autor = require('../models/autorModel');

function getAllAutor(req, res) {
  Autor.find({ }, (err, author) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(author);
  });
}
function getAllBookFromAutor(req, res) {
  Autor.findOne({ name: req.params.name, surname: req.params.surname }, (err, autor) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(autor.books);
  });
}

module.exports = {
  getAllAutor,
  getAllBookFromAutor,
};
