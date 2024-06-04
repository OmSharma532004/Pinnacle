
//create a send email controller of whatever body is coming in request 

const nodemailer = require("nodemailer");
const mailSender=require('../utils/mailSender');

const sendMail = async (req, res) => {
    try{
        const {email, name, phone} = req.body;
        if(!email || !name || !phone){
            return res.json({error:"Please fill all the fields"});
        }
        console.log(email, name, phone);
        await mailSender(
			email,
			"Demo Request from " + name,
			" Name: " + name + "<br> Email: " + email + "<br> Phone: " + phone + "<br> Message: " 
		);
    }
    catch(error) {
        console.log(error.message);
    }
}

module.exports = sendMail;