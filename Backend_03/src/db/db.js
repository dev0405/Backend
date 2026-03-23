const mongoose = require("mongoose")

async function connectDB(){

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Databse connected successsfully ");
        
    } catch (err) {
        console.log("Databse connection error :",error);
        
    }
}

module.exports=connectDB