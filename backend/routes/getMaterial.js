const express = require('express');
const { getMaterial } = require('../controllers/getMaterial');
const router = express.Router();

router.get('/getMaterial/:city', getMaterial);



module.exports = router;