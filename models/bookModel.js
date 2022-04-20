const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({

  name: {
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

module.exports = mongoose.model(bookSchema);