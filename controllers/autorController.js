const Autor = require('../models/autorModel');

function getAllAutor(req, res) {
  Autor.find({ }, (err, author) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(author);
  });
}

module.exports = {
  getAllAutor,
};
