// material addititon controllers 

const Category = require('../models/Category');
const Items = require('../models/Items');
const Item = require('../models/Items');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const City = require('../models/City');

//add city
module.exports.addCity= async (req, res) =>{
    const { name } = req.body;
    try {
      const existingCity = await City.findOne({ name });
      if (existingCity) {
        return res.status(400).json({ error: 'City already exists' });
      }
      const city = new City({ name });
      await city.save();
      res.status(201).json(city);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }

  //get all cities
module.exports.getCities = async (req, res) => {
    try{
        const cities = await City.find();
        return res.status(200).json({ cities });
    }
    catch(error){
        return res.status(400).json({ error });
    }
}



// add category
module.exports.addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ error: 'Category already exists', success: false });
        }
        const category = new Category({ name });
        await category.save();
        return res.status(201).json({ category, success: true });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', success: false });
    }
};
  
// add item
module.exports.addItem= async(req, res)=> {
    const { name, description, price, cityId, categoryId } = req.body;
    try {
      const city = await City.findById(cityId);
      if (!city) {
        return res.status(404).json({ error: 'City not found' });
      }
      if (!city.categories.includes(categoryId)) {
        city.categories.push(categoryId);
        await city.save();
      }
  
      const item = new Item({ name, description, categoryId });
  
      // Check if the price for this city already exists for the item
    
     

      //find if name is already there in items
        const existingItem = await Item
        .findOne({ name });
        if (existingItem) {
            //if the city is already there then dont add
          //push the price and city in that itema and not create a new one
            if(existingItem.prices.find(price => price.cityId.toString() === cityId)){
                return res.status(400).json({ error: 'Item already exists', success: false });
            }
            existingItem.prices.push({ cityId, price });
            await existingItem.save();
            return res.status(201).json({ existingItem, success: true });

  

        }



        item.prices.push({ cityId, price });
        await item.save();
        //add item in the category array
        const category = await Category
        .findById(categoryId);
        category.items.push(item._id);
        await category.save();
        
        return res.status(201).json({ item, success: true });

        

    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Server error' });
    }
  }


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


