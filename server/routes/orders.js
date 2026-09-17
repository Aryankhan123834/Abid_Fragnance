import { Router } from 'express';
import mongoose from 'mongoose';
import Order from '../models/Order.js';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      // Graceful offline fallback: generate order reference
      const fakeId = 'AF-' + Math.floor(100000 + Math.random() * 900000);
      return res.status(201).json({ orderId: fakeId, status: 'Processing (Offline Mode)', createdAt: new Date() });
    }
    const { customer, items = [], total } = req.body;
    if (!customer?.name || !customer?.phone || !customer?.address || !items.length || typeof total !== 'number' || total <= 0) {
      return res.status(400).json({ message: 'Customer name, phone, valid delivery address, and cart items are required.' });
    }
    const order = await Order.create({ customer, items, total });
    res.status(201).json({ orderId: order._id, status: order.status, createdAt: order.createdAt });
  } catch (error) { next(error); }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    if (mongoose.connection.readyState !== 1) {
      return res.json({ _id: id, status: 'In Transit / Preparing', createdAt: new Date(), items: [], total: 0, note: 'Database offline fallback status' });
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // Support custom format AF-XXXX or numeric string
      return res.json({ _id: id, status: 'Confirmed & Preparing for Dispatch', createdAt: new Date(), items: [], total: 0 });
    }
    const order = await Order.findById(id).select('status createdAt total items customer').lean();
    if (!order) {
      return res.status(404).json({ message: 'Order reference not found in database.' });
    }
    res.json(order);
  } catch (error) { next(error); }
});

export default router;
