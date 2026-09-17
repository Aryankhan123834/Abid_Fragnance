import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true }
  },
  items: [{ name: String, price: Number, quantity: Number, size: String }],
  total: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ['received', 'preparing', 'dispatched', 'delivered'], default: 'received' }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
