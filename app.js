const express = require("express")
const { json } = require("sequelize")
const app = express()
const bookRoute = require("./routes/bookRoute")
// let ko thau ma var or const use garda ni hunchha, const is better in this case
//package,json ma gaera sripts ma terminal command ko shortcut set garna sakinchha for eg. live. then next time npm run live.
//But if start and test used as shortcut, npm live is enough no need of run in between
//for live changes, in terminal node --watch app.js then save after changing app.js

require("./Database/connection")
app.use(express.json())
// ./ le chai current folder represent garchha. yo chai hamle database connection import gareko connection.js file bata
// second line le chai express lai json format ko data jun database bata auchha tyo read gar vanera order gareko
// ra esle chai javascript kei object format ma lagdinchha
//json format ma chai dictionary ko left hand key ma "" hunchha, javascript ko object format ma chai hudeina

app.use("/api/", bookRoute)
//yesle chai localhost:3000/api/bookRoute ma vako route concatenate handinchha
//kei maagna ko lagi get
//kunei manchhe le / ma kei request garyo vane response chai json format ma diyo
//req, res ko thau ma aru words ni lekhna sakinchha
// here "/" is a api because on hitting "/" by user, it gives response in json format








app.listen(3000, function(){
    console.log("server has started at port 3000")
})
