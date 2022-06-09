const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getAllDynamicProducts,
} = require('../controllers/products');

router.route('/').get(getAllProducts);
router.route('/dynamic').get(getAllDynamicProducts);

module.exports = router;
