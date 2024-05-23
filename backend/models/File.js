const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  path: { type: String, required: true },
  approved: { type: Boolean, default: false }
});

const File = mongoose.model('File', fileSchema);

module.exports = { File };
