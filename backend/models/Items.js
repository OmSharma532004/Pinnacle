// item schema with category, price ,desription and name
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    nameAndCity: {
        
        type: 
            {
                city: {
                    type: String,
                    required: true
                },
                
                name: 
                {
                    type: String,
                    required: true
                }
            }
       ,
        required: true,
        unique: true
    },
    price:{
        type: Number,
    
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Items = mongoose.model('Items', ItemSchema);
module.exports = Items;
