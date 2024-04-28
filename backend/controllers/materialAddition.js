// material addititon controllers 

const Category = require('../models/Category');
const Items = require('../models/Items');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

// add category
module.exports.addCategory = async (req, res) => {
    try{
        const categoryObj = {
            name: req.body.name
        };
    
        const category = new Category(categoryObj);
        await category.save();
        return res.status(201).json({ category , success: true});



    }
    catch(error){
        return res.status(400).json({ error , success: false});
    }
};
  
// add item
module.exports.addItem = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;

        // Check if the category ID is a valid ObjectId
        const categoryId = new ObjectId(category);
        // No need to check validity separately as ObjectId constructor ensures validity

        // Check if the category exists
        const existingCategory = await Category.findById(categoryId);
        if (!existingCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }

        // Create the item object
        const itemObj = new Items({
            name,
            price,
            description,
            category: categoryId, // Assign the ObjectId directly
        });

        // Save the item in the Items collection and update the category
        await Promise.all([
            itemObj.save(),
            Category.findByIdAndUpdate(
                categoryId,
                { $push: { Items: itemObj._id } }, // Push the item's ObjectId to the Items array
                { new: true }
            ),
        ]);

        return res.status(201).json({ item: itemObj, success: true});
    } catch (error) {
        return res.status(400).json({ error: error.message,success: false});
    }
};

// get all categories
module.exports.getCategories = async (req, res) => {
    try{
        const categories = await Category.find();
        return res.status(200).json({ categories , success: true});
    }
    catch(error){
        return res.status(400).json({ error , success: false});
    }
};

// get all items
module.exports.getItems = async (req, res) => {
    try{
        const items = await Items.find();
        return res.status(200).json({ items });
    }
    catch(error){
        return res.status(400).json({ error });
    }
};

// get items by category
module.exports.getItemsByCategory = async (req, res) => {
    try{
        const items = await Items.find({ category: req.params.category });
        return res.status(200).json({ items });
    }
    catch(error){
        return res.status(400).json({ error });
    }
};

// get category by id
module.exports.getCategoryById = async (req, res) => {
    try{
        const category = await Category.findById(req.params.category);
        return res.status(200).json({ category });
    }
    catch(error){
        return res.status(400).json({ error });
    }
};


