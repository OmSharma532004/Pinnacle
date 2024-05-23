const express = require('express');
const router = express.Router();
const { uploadFile, getFiles, approveFile } = require('../controllers/fileConttoller');
const path = require('path');

router.post('/upload', uploadFile);
router.get('/files', getFiles);
router.post('/approve/:id', approveFile);

// Route to download files
router.get('/download/:filename', (req, res) => {
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, '../uploads', fileName);

  res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
  res.setHeader('Content-Type', 'text/csv');

  res.download(filePath, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
});

module.exports = router;
