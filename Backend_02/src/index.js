// require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import {app} from "./app.js"
dotenv.config({
    path:'./.env'
})
console.log("Mongo URI:", process.env.MONGODB_URI);
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";




connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
        
    })
})
.catch(err=>{
    console.log("Mongo db connection failed ",err);
    
})













/*
import express from "express"
const app=express()
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("ERRR :",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("Error : ",error);
        throw error;
    }
})()
*/