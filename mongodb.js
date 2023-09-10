const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://balajimahraaj123:e8SYSI8PwjmsXLtu@cluster0.it1ro8e.mongodb.net/mongodbtest' , {useUnifiedTopology: true , useNewUrlParser: true})
    

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose