import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();
const rawProducts = [
  {
    name: '9PM Elixir',
    folder: 'product 9PM Elixir',
    images: ['1.jpg', '2.jpg'],
    price: 4200,
    tag: 'Signature',
    family: 'Woody & Amber',
    gender: 'Unisex',
    longevity: '12+ Hours (Intense)',
    projection: 'Enveloping & Heavy',
    description: 'A rich, lasting expression with luminous florals, warm amber woods, and a golden trail that stays long after you leave.',
    sizes: ['30 ml', '50 ml'],
    sizePrices: { '30 ml': 2800, '50 ml': 4200 },
    notes: {
      top: ['Bergamot', 'Lavender', 'Apple', 'Cardamom'],
      heart: ['Lily of the Valley', 'Cinnamon', 'Clary Sage'],
      base: ['Tonka Bean', 'Vanilla', 'Amberwood', 'Patchouli']
    }
  },
  {
    name: '9PM Rebel',
    folder: 'product 9PM Rebel',
    images: ['1.jpg', '2.jpg', '3.jpg'],
    price: 4200,
    tag: 'Best seller',
    family: 'Fresh & Citrus',
    gender: 'Pour Homme',
    longevity: '10-12 Hours',
    projection: 'Bold & Striking',
    description: 'Confident and magnetic. A spirited blend of crisp fruits and dark smokey accords made for nights that deserve to be remembered.',
    sizes: ['30 ml', '50 ml'],
    sizePrices: { '30 ml': 2800, '50 ml': 4200 },
    notes: {
      top: ['Granny Smith Apple', 'Mandarin', 'Pineapple'],
      heart: ['Pineapple Blossom', 'Cedarwood', 'Black Pepper'],
      base: ['Dry Amber', 'Caramel', 'Oakmoss', 'Leather']
    }
  },
  {
    name: 'Creed Aventus',
    folder: 'product Creed Aventus',
    images: ['1.png', '2.png', '3.jfif'],
    price: 4800,
    tag: 'Bestseller',
    family: 'Woody & Fruity',
    gender: 'Pour Homme',
    longevity: '12+ Hours (Iconic)',
    projection: 'Commanding Aura',
    description: 'Bold character meets polished refinement in this confident, long-lasting signature scent featuring blackcurrant, birch smoke, and rich oakmoss.',
    sizes: ['30 ml', '50 ml'],
    sizePrices: { '30 ml': 3200, '50 ml': 4800 },
    notes: {
      top: ['Blackcurrant', 'Italian Bergamot', 'French Apple', 'Royal Pineapple'],
      heart: ['Birch Wood', 'Moroccan Jasmine', 'Patchouli', 'Rose'],
      base: ['Musk', 'Oakmoss', 'Ambergris', 'Vanilla']
    }
  },
  {
    name: 'Gucci Flora',
    folder: 'product Gucci Flora',
    images: ['1.jpg', '2.jpg'],
    price: 3900,
    tag: 'New arrival',
    family: 'Luminous Florals',
    gender: 'Pour Femme',
    longevity: '8-10 Hours',
    projection: 'Graceful & Elegant',
    description: 'A softly luminous floral composition centered around white gardenia, jasmine grandiflorum, and a fresh pear blossom finish.',
    sizes: ['30 ml', '50 ml'],
    sizePrices: { '30 ml': 2600, '50 ml': 3900 },
    notes: {
      top: ['Pear Blossom', 'Red Berries', 'Italian Mandarin'],
      heart: ['White Gardenia', 'Jasmine Grandiflorum', 'Frangipani'],
      base: ['Brown Sugar Accord', 'Patchouli', 'White Musk']
    }
  },
  {
    name: 'Hawas ice',
    folder: 'product Hawas ice',
    images: ['1.jfif', '2.jpg', '3.jpg'],
    price: 4000,
    tag: 'Fresh',
    family: 'Fresh & Aquatic',
    gender: 'Unisex',
    longevity: '10+ Hours',
    projection: 'Crisp & Radiant',
    description: 'Cool, energetic, and clean. An iced aquatic blend infused with frosted citrus, mint, and ocean breeze accords.',
    sizes: ['30 ml', '50 ml'],
    sizePrices: { '30 ml': 2700, '50 ml': 4000 },
    notes: {
      top: ['Frosted Lemon', 'Spearmint', 'Apple', 'Star Anise'],
      heart: ['Plum', 'Orange Blossom', 'Cardamom'],
      base: ['Driftwood', 'Ambergris', 'Musk', 'Moss']
    }
  },
  {
    name: 'Janan Sports',
    folder: 'product Janan Sports',
    images: ['1.jpeg', '2.jpg', '3.jpg'],
    price: 3500,
    tag: 'Everyday',
    family: 'Citrus & Woody',
    gender: 'Pour Homme',
    longevity: '8-10 Hours',
    projection: 'Active & Invigorating',
    description: 'Bright grapefruit, spicy ginger, and smooth cedarwood in an easy, active daily signature designed for dynamic lifestyles.',
    sizes: ['30 ml', '50 ml'],
    sizePrices: { '30 ml': 2300, '50 ml': 3500 },
    notes: {
      top: ['Grapefruit', 'Lime', 'Pink Pepper'],
      heart: ['Ginger', 'Nutmeg', 'Jasmine'],
      base: ['Cedarwood', 'Vetiver', 'Sandalwood', 'White Musk']
    }
  },
  {
    name: 'Marj',
    folder: 'product Marj',
    images: ['1.jfif', '2.jpg', '3.jpg'],
    price: 3800,
    tag: 'Popular',
    family: 'Oriental Oud',
    gender: 'Unisex',
    longevity: '12+ Hours (Regal)',
    projection: 'Intense Sillage',
    description: 'A balanced, opulent fragrance featuring saffron, Turkish rose, and dark amber oud with an elegant warmth that wears beautifully.',
    sizes: ['30 ml', '50 ml'],
    sizePrices: { '30 ml': 2500, '50 ml': 3800 },
    notes: {
      top: ['Saffron', 'Nutmeg', 'Pink Pepper'],
      heart: ['Turkish Rose', 'Agarwood (Oud)', 'Geranium'],
      base: ['Golden Amber', 'Leather', 'Sandalwood', 'Musk']
    }
  },
  {
    name: 'Wisaal',
    folder: 'product Wisaal',
    images: ['1.jpg', '2.jpg', '3.jpg'],
    price: 3800,
    tag: 'New arrival',
    family: 'Floral & Musk',
    gender: 'Unisex',
    longevity: '10 Hours',
    projection: 'Intimate & Soft',
    description: 'Intimate florals, velvety spice, and soft cashmeran musk, composed for a quietly unforgettable, seductive presence.',
    sizes: ['30 ml', '50 ml'],
    sizePrices: { '30 ml': 2500, '50 ml': 3800 },
    notes: {
      top: ['Fresh Floral Accords', 'Peach Blossom'],
      heart: ['Rose', 'Spicy Heart', 'Ylang Ylang'],
      base: ['Musk', 'Sandalwood', 'Cashmeran Wood']
    }
  }
];

const products = rawProducts.map(p => ({
  ...p,
  slug: p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}));

await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/abid-fragrance');
await Product.deleteMany({});
await Product.insertMany(products);
console.log(`Seeded ${products.length} Abid Fragrance products.`);
await mongoose.disconnect();
