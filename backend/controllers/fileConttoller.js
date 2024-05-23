const fs = require('fs');
const { File } = require('../models/File');

const uploadFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.file;
  const filePath = __dirname + '/../uploads/' + file.name;

  file.mv(filePath, async (err) => {
    if (err) return res.status(500).send(err);

    try {
      const newFile = new File({ name: file.name, path: filePath });
      await newFile.save();
      res.send('File uploaded and saved to database!');
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: error  , message: 'Failed to save file to database'});
    }
  });
};

const getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    res.status(500).send('Error fetching files');
  }
};

const approveFile = async (req, res) => {
  const fileId = req.params.id;

  try {
    const file = await File.findById(fileId);
    if (file) {
      file.approved = true;
      await file.save();
      res.send('File approved!');
    } else {
      res.status(404).send('File not found');
    }
  } catch (error) {
    res.status(500).send('Error approving file');
  }
};

module.exports = {
  uploadFile,
  getFiles,
  approveFile
};
