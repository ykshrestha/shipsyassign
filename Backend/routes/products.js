const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all with pagination & filtering
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 5,
      category,
      is_active,
      sortBy = 'createdAt',
      sortOrder = 'asc',
      search
    } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (is_active !== undefined) filter.is_active = is_active === 'true';
    if (search) filter.name = { $regex: search, $options: 'i' };  // case-insensitive search

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    const products = await Product.find(filter)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const count = await Product.countDocuments(filter);

    res.json({
      data: products,
      page: Number(page),
      totalPages: Math.ceil(count / limit),
      totalCount: count
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Read one
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Product not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
