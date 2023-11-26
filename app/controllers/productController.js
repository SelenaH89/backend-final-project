const Product = require('../models/product');

exports.addProduct = async (req, res) => {
  const { productName, productCategory, productPrice, productBarcode } =
    req.body;

  try {
    const newProduct = await Product.create({
      productName,
      productCategory,
      productPrice,
      productBarcode,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
