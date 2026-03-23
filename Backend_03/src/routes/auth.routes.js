const express=require('express');
const authoController=require("../controllers/auth.controller")

const router=express.Router();

/* POST /api/auth/register */
router.post("/register",authoController.registerUser)

router.get("/test",(req,res)=>{
    console.log("Cookies: ", req.cookies);
    res.json({
        message:"Test route",
        cookies: req.cookies
    })
    
})

module.exports=router;