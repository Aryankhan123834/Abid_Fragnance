import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';
import contactRoutes from './routes/contact.js';

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const app = express();
const port = Number(process.env.PORT || 5000);

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('tiny'));
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'abid-fragrance-api' }));
app.use(express.static(root));
app.get('*', (_req, res) => res.sendFile(path.join(root, 'index.html')));
app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong on the server.' });
});

async function start() {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB unavailable. API will still serve with database writes disabled.', error.message);
    }
  } else console.warn('MONGODB_URI is not configured. Add it to .env for persistence.');
  app.listen(port, () => console.log(`Abid Fragrance running at http://localhost:${port}`));
}

start();
