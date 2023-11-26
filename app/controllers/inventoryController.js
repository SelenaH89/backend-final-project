const Inventory = require('../models/inventory');

exports.addInventoryItem = async (req, res) => {
  const { product_id, quantity, user_id } = req.body;

  try {
    const newInventoryItem = await Inventory.create({
      product_id,
      quantity,
      user_id,
    });

    res.status(201).json(newInventoryItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
