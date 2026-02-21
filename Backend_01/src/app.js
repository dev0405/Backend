// app.js is used to create server 

const express=require("express");

const app=express()
app.use(express.json())   /* By default express cannot read data that come directly through request so it require middleware express.json() to read data that come in body */

const notes=[]
/* title, description we are rquired from user*/

/* api method POST , api name /notes */


/* POST /notes */
app.post('/notes',(req,res)=>{
    /* console.log(req.body);   we are basically getting object in he body  */
    notes.push(req.body)

    res.status(201).json({
        message:"note created successfully"
    })
})

/* GET /notes */
app.get('/notes',(req,res)=>{
    
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})

/* DELETE /notes/:index */
/* notes is the static part and index is the dynamic part in the routes 
   and in routes dynamic part is known or considered as params */
app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index
    delete notes[index]
    res.status(200).json({
        message:"note deleted successfully"
    })
})

app.patch('/notes/:index',(req,res)=>{
    const index=req.params.index
    const description=req.body.description
    notes[index].description=description
    res.status(200).json({
        message:"notes description updated successfully"
    })
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