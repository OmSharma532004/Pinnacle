// authRoutes.js

const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/auth'); // Import signup and signin controllers

// Signup route
router.post('/signup', signup);

// Signin route
router.post('/signin', signin);

module.exports = router;
