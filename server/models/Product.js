import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  slug: { type: String, required: true, unique: true, trim: true },
  folder: { type: String, required: true },
  images: { type: [String], required: true },
  price: { type: Number, required: true, min: 0 },
  tag: { type: String, default: 'Signature' },
  description: { type: String, required: true },
  sizes: { type: [String], default: ['30 ml', '50 ml'] },
  sizePrices: { type: Map, of: Number },
  family: { type: String, default: 'Woody & Amber' },
  gender: { type: String, default: 'Unisex' },
  longevity: { type: String, default: 'Very Long Lasting (10-12 hrs)' },
  projection: { type: String, default: 'Strong & Radiating' },
  notes: {
    top: { type: [String], default: [] },
    heart: { type: [String], default: [] },
    base: { type: [String], default: [] }
  },
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
