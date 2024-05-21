// controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

function generateRandomPassword() {
  return crypto.randomBytes(8).toString('hex');
}

function generateRandomPhoneNumber() {
  const randomPhoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
  return randomPhoneNumber.toString();
}

exports.createUser = async (req, res) => {
  try {
    const { name, password, email, phoneNo, approvedHouses } = req.body;

    let user = new User({
      name,
      password,
      email,
      phoneNo,
      approvedHouses,
    });

    user = await user.save();

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(201).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.googleSignIn = async (req, res) => {
  const { googleId, email, name, imageUrl, tokenId } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        googleId,
        email,
        Name: name || "Default Name", // Provide a fallback name
        imageUrl,
        password: generateRandomPassword(),
        phoneNo: generateRandomPhoneNumber(),
        approvedHouses: null
      });
      await user.save();
    }

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
