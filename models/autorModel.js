const mongoose = require('mongoose');

const { Schema } = mongoose;

const autorSchema = new Schema({
  name: {
    type: String,
    require: [true, 'Author is require'],
  },
  surname: {
    type: String,
    require: [true, 'Surname is require'],
  },
  nationality: {
    type: String,
    require: [true, 'Nationality is require'],
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book',
  }],
});

module.exports = mongoose.model('Autor', autorSchema);
