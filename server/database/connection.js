const mongoose = require('mongoose');
// const URI = "Not Today!";
// require('dotenv').config();

const connectDB = async ()=> {
    try{
        // mongodb connection string
        
        const con = await mongoose.connect(URI);

        console.log(`MongoDB connected :${con.connection.host}`);
    }catch(err){
        console.log("Why is this still happening?")
        console.log(err);
        process.exit(1);

    }
}

module.exports = connectDB;