const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } = require("../controllers/book.controller")

const router= require("express").Router()

router.route("/books").get(fetchBooks).post(addBook)
router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)
//  /books ma get request garda fetchbooks function and accordingly...
// :id chai id variable vanera haleko ho website ko url ma chai : halirakhnupardeina





module.exports = router