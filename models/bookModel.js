const mysql = require('mysql');

const { Schema } = mysql;

const bookSchema = new Schema({

  title: {
    type: String,
    required: [true, 'Name is required'],
  },
  numPages: {
    type: Number,
    required: [true, 'Numbre of pages is required'],
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Autor',
  },

});

module.exports = mongoose.model('Book', bookSchema);
