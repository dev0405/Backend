const express=require("express")

const app = express()  // use to create server instance 

app.get("/",(req,res)=>{
    res.send("Hello World")
    
})

app.listen(8000)  // use to start server 


// REST API
/*
GET- It is used to fetch data from the server 
POST- It is used to send data to the sever 
PATCH- It is used to update the data that is already on the server 
DELETE- It is used to delete data on the server

*/