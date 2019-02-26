const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Route for Search/Saved component, matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Route for Saved component, matches with "/api/books/???"
router.route("/:id")
  .delete(booksController.remove);

module.exports = router;