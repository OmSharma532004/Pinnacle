// category of raw material schema
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    Items: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Items'
            }
        ],
    }
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;