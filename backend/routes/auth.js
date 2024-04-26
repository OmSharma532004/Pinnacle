// authRoutes.js

const express = require('express');
const router = express.Router();
const { signup, signin ,sendotp} = require('../controllers/auth'); // Import signup and signin controllers

// Signup route
router.post('/signup', signup);

// Signin route
router.post('/signin', signin);
//sendotp
router.post('/sendotp', sendotp);

module.exports = router;
