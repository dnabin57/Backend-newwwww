//creating a function with these two parameters which are later to be passed as arguments
const bookModel = (sequelize, DataTypes)=>{
    const Book = sequelize.define("book", {
        bookName: {
            type: DataTypes.STRING,
            allowNull: false
            //this means null value is not allowed, must enter something
        },
        bookPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bookAuthor : {
            type: DataTypes.STRING,
            allowNull: false
        },
        bookGenre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Book
}
//in above code, we created a table named books. book will be converted to books by default
//it has above mentioned 3 columns with their attributes as mentioned.
module.exports = bookModel