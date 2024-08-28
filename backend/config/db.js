const mongodb = require('mongodb');
const mongoose = require("mongoose");

const db = async() => {
    try {
        const data= await mongoose.connect('mongodb+srv://admin:admin@cluster0.iyv4j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    console.log("data coneection", data.connection.host)
    } catch (error) {
        console.log(error)
    } 
}
module.exports = db;