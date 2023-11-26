const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// Define inventory routes

// Add an inventory item
router.post('/add', async (req, res) => {
  try {
    const newInventory = await Inventory.create(req.body);
    res.status(201).json(newInventory);
  } catch (error) {
    console.error('Error adding inventory item:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete an inventory item
router.delete('/delete/:id', async (req, res) => {
  const inventoryItemId = req.params.id;

  try {
    const deletedInventory = await Inventory.destroy({
      where: {
        id: inventoryItemId,
      },
    });

    if (deletedInventory) {
      res.status(204).send();
    } else {
      res.status(404).send('Inventory item not found');
    }
  } catch (error) {
    console.error('Error deleting inventory item:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Search for an inventory item by ID
router.get('/searchById/:id', async (req, res) => {
  const inventoryId = req.params.id;

  try {
    const inventory = await Inventory.findByPk(inventoryId);

    if (inventory) {
      res.json(inventory);
    } else {
      res.status(404).send('Inventory item not found');
    }
  } catch (error) {
    console.error('Error searching inventory item by ID:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get all inventory items
router.get('/inventoryItems', async (req, res) => {
  try {
    const inventory = await Inventory.findAll();
    res.json(inventory);
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
