import {asyncHandler} from "../utils/asyncHandler.js"

const registerUser=asyncHandler(async (req,res)=>{
    // res.status(200).json({
    //     message:"post request done "
    // })

    //get user deatils from frontend
    //validation - not empty
    //check if user already exists: username, email
    //xhexk for the images, checks for avatar
    //upload them to cloudinary, avatar
    //create user object - create entry in db
    //remove password and refresh token field from response
    //check for user creation 
    //return res
    
    


    const {fullName,email,username,password}=req.body
    console.log("email: ",email);
    


})

export {registerUser}