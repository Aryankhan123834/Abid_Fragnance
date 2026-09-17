import { Router } from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) return res.json([]);
    const products = await Product.find({ active: true }).sort({ createdAt: 1 }).lean();
    res.json(products);
  } catch (error) { next(error); }
});

router.get('/:slug', async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) return res.status(503).json({ message: 'Catalog database is not connected.' });
    const product = await Product.findOne({ slug: req.params.slug, active: true }).lean();
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) { next(error); }
});

export default router;
