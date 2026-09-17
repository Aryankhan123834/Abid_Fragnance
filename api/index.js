import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import productRoutes from '../server/routes/products.js';
import orderRoutes from '../server/routes/orders.js';
import contactRoutes from '../server/routes/contact.js';

const app = express();

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: true }));
app.use(express.json({ limit: '1mb' }));

app.use(async (_req, _res, next) => {
  if (process.env.MONGODB_URI && mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
    } catch (err) {
      console.error('MongoDB connection error in serverless handler:', err.message);
    }
  }
  next();
});

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'abid-fragrance-api-vercel' }));

export default app;
