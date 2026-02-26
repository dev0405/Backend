const express=require("express")
const noteModel=require("./models/note.model")

const app=express();
app.use(express.json())


/* MongoDB operation */
 
app.post("/notes",async (req,res)=>{
    const data = req.body
    await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        message:"note created "
    })
})

app.get("/notes",async (req,res)=>{
    const notes=await noteModel.find()   /* give data in the format of array of objects */
    // const notes=await noteModel.findOne({   /* fetches data as per the defined condition and return object*/
    //     title:"test_title_01"                 /* if not present in db then return null */
    // })
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})
/* find -> [{},{}] or []
   findOne-> {} or null
*/

app.delete("/notes/:id",async (req,res)=>{
    const id=req.params.id
    await noteModel.findByIdAndDelete({
        _id:id
    })
    res.status(200).json({
        message:"note deleted successfully"
    })
})

app.patch("/notes/:id",async (req,res)=>{
    const id=req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({
        _id:id
    },{
        description:description
    })
    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports=app