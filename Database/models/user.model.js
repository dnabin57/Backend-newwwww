const userModel = (sequelize, DataTypes)=>{
    const user = sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
            //this means null value is not allowed, must enter something
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
       email : {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return user
}
//in above code, we created a table named books. book will be converted to books by default
//it has above mentioned 3 columns with their attributes as mentioned.
module.exports = userModel