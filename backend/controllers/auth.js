//login and signup backend controllers

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');
const OTP = require('../models/OTP');




//signup controller

  module.exports.signup= async(req,res)=>{
    try{
        const {Name,email,password,phoneNo,otp}=req.body;
        if(!Name || !email || !password || !phoneNo ){
            return res.status(400).json({
                success:false,
                message:"Please enter all fields"
            })
        }
        //check if user already exists
        let user= await

        User.findOne({email});
        if(user){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
    
        }
        const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1)
    console.log(response)
    if (response.length === 0) {

      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      })
    } else if (otp !== response[0].otp) {
     
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      })
    }
        const hashedPassword = await bcrypt.hash(password, 10);

        user= new User({
            Name,
            email,
            password:hashedPassword,
            phoneNo
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
            user:user,
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

module.exports.logout=async(req,res)=>{
    try{
        return res.status(200).json({
            success:true,
            message:"User logged out successfully"
        })
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({
          success: false,
          message: "User cannot be logged out. Please try again.",
          error:error
        })
      }
}

exports.sendotp = async (req, res) => {
    try {
      const { email } = req.body
  
  
    //   const checkUserPresent = await User.findOne({ email })
  
  
    //   if (checkUserPresent) {
    //     return res.status(401).json({
    //       success: false,
    //       message: `User is Already Registered`,
    //     })
    //   }
  
      var otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      })
    //   const result = await OTP.findOne({ otp: otp })
    //   console.log("Result is Generate OTP Func")
    //   console.log("OTP", otp)
    //   console.log("Result", result)
    //   while (result) {
    //     otp = otpGenerator.generate(6, {
    //       upperCaseAlphabets: false,
    //     })
    //   }
      const otpPayload = { email, otp }
      const otpBody = await OTP.create(otpPayload)
      console.log("OTP Body", otpBody)
      res.status(200).json({
        success: true,
        message: `OTP Sent Successfully`,
        otp,
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({ success: false, error: error.message })
    }
  }