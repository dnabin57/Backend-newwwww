const { books } = require("../Database/connection")

const fetchBooks =  async function(req,res){
    
    //books kina vane db.books ma halya chha hamle
    //books import garna ko lagi books halera ctrl+space hanera drop down menu maa enter hanyo vane aafei import ko code
    //haaldinchha maathi 
    const datas = await books.findAll()
    //async is required when await is used. await is used for tasks that take same time like database queries.
    //findAll() is a method to get all data from a database table. it returns array
    res.json({
        message : "Books fetched successfully",
        datas : datas
        //yo message, datas (left side ko kura haru) ko thau ma j rakhna ni milyo
    })
}

const addBook = async function(req,res){
    //hamro postman ma haleko json data chai req ko body ma baseko hunchha
    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body
    await books.create({
        bookName: bookName,
        bookPrice: bookPrice,
        bookAuthor: bookAuthor,
        bookGenre: bookGenre
    })
    //in js, if you have same key and value, you can simply write only one.
    //its alternative is:
    //bookName,
    //bookPrice,......

    
    res.json({
        message : "Books added successfully"
    })
}

const deleteBook = async function(req,res){
           
    res.json({
        message : "Books deleted successfully"
    })
}

const editBook = async function(req,res){
           
    res.json({
        message : "Books updated successfully"
    })
}

const singleFetchBook = async function(req,res){
    const id = req.params.id
    //above is for getting input of id
    const datass = await books.findByPk(id)
    //above is for finding by id from books table. findByPk returns object
    //its alternative: (But findAll returns array. Also, id bahek aru kei bata search garna lai pani findAll nei use garne)
    // const datass = await books.findAll({
    //     where {
    //         id:id
    //     }
    // })
    
    res.json({
        message: "Book fetched successfully",
        datass
    })
}
module.exports = {fetchBooks, addBook, deleteBook, editBook, singleFetchBook}
//yo nagari direct function mei gaera const fetchBooks ko thau ma exports.fetchBooks = .... garda pani export hunchha