const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String,
    enum: ['Electronics', 'Grocery', 'Clothing', 'Furniture'],
    required: true
  },
  is_active: { type: Boolean, default: true },
  quantity: { type: Number, default: 0, required: true },
  reorder_level: { type: Number, default: 10, required: true },
  price: { type: Number, default: 0 }
}, { timestamps: true });

// Virtual calculated field: needs_reorder
ProductSchema.virtual('needs_reorder').get(function() {
  return this.quantity <= this.reorder_level;
});

ProductSchema.set('toJSON', { virtuals: true });
ProductSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Product', ProductSchema);
