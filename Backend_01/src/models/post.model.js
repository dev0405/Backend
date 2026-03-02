const mongoose=require("mongoose");


const postSchema=new mongoose.Schema({
    image:String,
    caption:String
})

const postModel=mongoose.model("post",postSchema)  /* "post" this is the name for collection where it is being used  */

module.exports=postModel




/* 
post={
image:String,
caption:String
} 

user={
name:String,
email:String,
pasword:String,
posts=[post1,post2,post3]
}


*/