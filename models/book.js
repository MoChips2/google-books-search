const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  desc: { type: String },
  image: { type: String },
  link: { type: String, required: true },
  savedBook: { type: Boolean }
})

const books = mongoose.model("books", bookSchema);

module.exports = books;