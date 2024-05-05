// routes for Material Addition
const express = require('express');
const router = express.Router();

const { addCategory, addItem, getCategories, getItems, getItemsByCategory, getCategoryById, addCity,getCities, addItemThroughCSV } = require('../controllers/materialAddition');

// Add category
router.post('/category/add', addCategory);

//add city
router.post('/city/add', addCity);

//get cities
router.get('/cities', getCities);

router.post('/uploadCSV',addItemThroughCSV);


// Add item
router.post('/item/add', addItem);

// Get all categories
router.get('/categories', getCategories);

// Get all items
router.get('/items', getItems);

// Get items by category
router.get('/items/:category', getItemsByCategory);

// Get category by id
router.get('/category/:category', getCategoryById);



module.exports = router;

