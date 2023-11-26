const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Define product routes

// Add a product
router.post('/add', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete a product
router.delete('/delete/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: productId,
      },
    });

    if (deletedProduct) {
      res.status(204).send();
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Search for a product by ID
router.get('/searchById/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    console.error('Error searching product by ID:', error);
    res.status(500).send('Internal Server Error');
  }
});
// Search for a product by barcode
router.get('/product/:barcode', async (req, res) => {
  const productBarcode = req.params.barcode;

  try {
    const product = await Product.findByPk(productBarcode);

    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    console.error('Error searching product by ID:', error);
    res.status(500).send('Internal Server Error');
  }
});
// Get all products
router.get('/product', async (req, res) => {
  try {
    const product = await Product.findAll();
    res.json(product);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
