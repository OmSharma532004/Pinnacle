// userRoutes.js
const express = require('express');
const { createUser, googleSignIn, signIn } = require('../controllers/userController'); // Adjust the path as needed

const router = express.Router();

router.post('/signup', createUser);
router.post('/google-signin', googleSignIn);
router.post('/signin', signIn);

module.exports = router;
