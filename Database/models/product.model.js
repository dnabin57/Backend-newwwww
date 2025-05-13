const productModel = (sequelize, DataTypes)=>{
    const product = sequelize.define("product", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false
            //this means null value is not allowed, must enter something
        },
        productPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
       productImage : {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return product
}
//in above code, we created a table named books. book will be converted to books by default
//it has above mentioned 3 columns with their attributes as mentioned.
module.exports = productModel