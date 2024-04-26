//login and signup backend controllers

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//signup controller

  module.exports.signup= async(req,res)=>{
    try{
        const {Name,email,password,phoneNo,address}=req.body;
        //check if user already exists
        let user= await

        User.findOne({email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
    
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        user= new User({
            Name,
            email,
            password:hashedPassword,
            phoneNo,
            address
        });
        await user.save();
        return res.status(200).json({
            success:true,
            message:"User registered successfully"
        })
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({
          success: false,
          message: "User cannot be registered. Please try again.",
          error:error
        })
      }
}
//signin controller
module.exports.signin= async(req,res)=>{
    try{
        const {email,password}=req.body;
        //check if user exists
        let user= await
        User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User does not exist"
            })
    
        }
        //check if password is correct
        const validPassword= await bcrypt.compare(password,user.password);
        if(!validPassword){
            return res.status(400).json({
                success:false,
                message:"Invalid password"
            })
        }
        //generate token
        const token= jwt.sign({id:user._id},process.env.JWT_SECRET);
        return res.status(200).json({
            success:true,
            message:"User logged in successfully",
            token
        })
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({
          success: false,
          message: "User cannot be logged in. Please try again.",
          error:error
        })
      }
}
