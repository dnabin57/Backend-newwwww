const {Sequelize, DataTypes} = require("sequelize")
// yaha const pachhadi same naam hannu parchha kinavane yo vaneko sequelize le deko specific items ho
// tyo specific items kk chha vanera thaha pauna ctrl + space hanne
// mathi ko alternative:
// const sequelize = require("sequelize")
// const Sequelize = sequelize.sequelize
//const DataTypes = sequelize.DataTypes

//const ma vako Sequelize ma lager mouse rakhne ho vane class ho vanne tha hunchha. class ko naam capital letter bata suru hunchha

const sequelize = new Sequelize("postgresql://postgres.jfxlqddpgbwghzjarmlk:sositahari2@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")
//this is how we create an object of class Sequelize in javascript. object name is generally started with small letter
// Sequelize cant be used as object name because it is the name of class already


sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected vayo")
})
.catch((err)=>{
    console.log("Error aayo" + err)
})

//connection successful or error, displays accordingly

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model")(sequelize, DataTypes)
db.user = require("./models/user.model")(sequelize, DataTypes)
db.product = require("./models/product.model")(sequelize, DataTypes)
//above, we have create db object with its items
//its alternative is:

//const db = {
//    Sequelize: Sequelize
//    sequelize: sequelize
//}


//for migrating to database
//alter:false means any changes in code doesnt change the database. alter:true only changes the name of columns 
//without deleting other data in the tables. if you need to delete whole data, add force:false within brackets
// kei change garne bela ma matrei alter:true garne natra false nei chhoddine
sequelize.sync({alter:true}).then(()=>{
    console.log("Migrate vayo hai ta")
})

module.exports = db
//exporting the db object so that we can import it in app.js
