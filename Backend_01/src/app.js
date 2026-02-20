// app.js is used to create server 

const express=require("express");

const app=express()
app.use(express.json())   /* By default express cannot read data that come directly through request so it require middleware express.json() to read data that come in body */

const notes=[]
/* title, description we are rquired from user*/

/* api method POST , api name /notes */

app.post('/notes',(req,res)=>{
    /* console.log(req.body);   we are basically getting object in he body  */
    notes.push(req.body)

    res.status(201).json({
        message:"note created successfully"
    })
})

app.get('/notes',(req,res)=>{
    
})


/*
note={
    title:"My first note",
    description:"this is mu first note"
}

const notes=[
    {
        title:"My first note",
        description:"this is mu first note"
    },
    {
        title:"My second note",
        description:"this is mu second note"
    }
]
*/

module.exports=app