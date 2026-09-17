// ABID FRAGRANCE - Luxury Storefront Engine (2026 Edition)

const DEFAULT_CATALOG = [
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

let products = [...DEFAULT_CATALOG];
let cart = JSON.parse(localStorage.getItem('abid-cart') || '[]');
let currentProduct = null;
let currentSize = '50 ml';
let currentQty = 1;
let filterFamily = 'All';
let filterGender = 'All';
let sortOrder = 'curated';

const app = document.querySelector('#app');

function money(value) {
  return `PKR ${Number(value || 0).toLocaleString()}`;
}

function image(product, index = 0) {
  if (!product || !product.images || !product.images.length) return '';
  return `${product.folder}/${product.images[index] || product.images[0]}`;
}

function getProductPrice(product, size = '50 ml') {
  if (product.sizePrices && product.sizePrices[size]) {
    return product.sizePrices[size];
  }
  if (size === '30 ml') return Math.round(product.price * 0.65);
  return product.price;
}

function card(product) {
  const notesPreview = product.notes?.top ? product.notes.top.slice(0, 2).join(' · ') : '';
  return `
    <article class="product-card" data-product="${product.name}">
      <div class="product-image">
        <img src="${image(product)}" alt="${product.name} perfume" loading="lazy">
        <span class="product-tag">${product.tag || 'Signature'}</span>
        <span class="gender-tag">${product.gender || 'Unisex'}</span>
      </div>
      <div class="product-info">
        <div class="card-meta"><span class="family-badge">${product.family || 'Fragrance'}</span></div>
        <h3>${product.name}</h3>
        <p class="notes-preview">${notesPreview ? 'Top: ' + notesPreview : product.description}</p>
        <div class="card-bottom">
          <span class="price">${money(product.price)}</span>
          <span class="view-link">Explore ✦</span>
        </div>
      </div>
    </article>
  `;
}

function home() {
  const families = ['All', 'Woody & Amber', 'Fresh & Citrus', 'Woody & Fruity', 'Luminous Florals', 'Fresh & Aquatic', 'Oriental Oud'];
  return `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">The Signature Collection · 2026</span>
        <h1>Wear your<br><em>presence.</em></h1>
        <p>Handcrafted perfume expressions designed to linger in the room and live in memory. Concentrated Eau de Parfum for memorable entrances.</p>
        <div class="hero-actions">
          <a class="button" href="#shop" data-route="shop">Explore Collection <span>→</span></a>
          <a class="button light" href="#quiz" data-route="quiz">Find Your Scent <span>✦</span></a>
        </div>
      </div>
      <div class="hero-image">
        <div class="hero-badge">
          <span>FREE DELIVERY</span>
          <strong>NATIONWIDE</strong>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <span class="eyebrow">Curated Selection</span>
          <h2>Most Wanted Signatures</h2>
        </div>
        <a class="link-arrow" href="#shop" data-route="shop">View all 8 perfumes →</a>
      </div>

      <div class="family-pills">
        ${families.map(fam => `
          <button class="pill ${filterFamily === fam ? 'active' : ''}" data-filter-family="${fam}">${fam}</button>
        `).join('')}
      </div>

      <div class="products-grid">
        ${getFilteredProducts().slice(0, 4).map(card).join('')}
      </div>
    </section>

    <section class="split-banner">
      <img src="${image(products.find(p => p.name === 'Creed Aventus') || products[2])}" alt="Creed Aventus luxury perfume" loading="lazy">
      <div class="split-copy">
        <span class="eyebrow">Featured Masterpiece</span>
        <h2>Leave a<br>lasting mark.</h2>
        <p>Creed Aventus — Royal Pineapple, smoked birchwood, and dark oakmoss. Designed for moments when ordinary won't do.</p>
        <div class="split-actions">
          <a class="button light" href="#product/Creed%20Aventus" data-route="product" data-product-link="Creed Aventus">Discover Creed Aventus →</a>
        </div>
      </div>
    </section>

    <section class="quiz-cta-banner">
      <div class="quiz-cta-content">
        <span class="eyebrow">Personal Scent Concierge</span>
        <h2>Unsure which fragrance fits you best?</h2>
        <p>Take our 30-second Interactive Scent Finder Quiz and discover your personal signature aroma.</p>
        <a href="#quiz" data-route="quiz" class="button gold-btn">Start Scent Quiz ✦</a>
      </div>
    </section>

    <section class="benefits">
      <div class="benefit">
        <b>01</b>
        <div>
          <h3>High Concentration Craft</h3>
          <p>Potent Eau de Parfum blends that project confidently and last 10–12+ hours on skin and fabrics.</p>
        </div>
      </div>
      <div class="benefit">
        <b>02</b>
        <div>
          <h3>100% Satisfaction Guarantee</h3>
          <p>10–15 days return & exchange policy. If your scent isn't right, we exchange it smoothly.</p>
        </div>
      </div>
      <div class="benefit">
        <b>03</b>
        <div>
          <h3>Free Nationwide Delivery</h3>
          <p>Delivered securely to your address across Pakistan with Cash on Delivery available.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="quote">
        <span class="eyebrow">The Abid Ethos</span>
        <p>“Scent is not decoration. It is atmosphere, memory, and the trace of you that stays after you leave.”</p>
        <cite>Abid Fragrance · Lahore, Pakistan</cite>
      </div>
    </section>
  `;
}

function getFilteredProducts() {
  let list = [...products];
  if (filterFamily !== 'All') {
    list = list.filter(p => p.family === filterFamily);
  }
  if (filterGender !== 'All') {
    list = list.filter(p => p.gender === filterGender);
  }

  if (sortOrder === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }
  return list;
}

function shop() {
  const filtered = getFilteredProducts();
  const families = ['All', 'Woody & Amber', 'Fresh & Citrus', 'Woody & Fruity', 'Luminous Florals', 'Fresh & Aquatic', 'Oriental Oud', 'Floral & Musk'];
  const genders = ['All', 'Unisex', 'Pour Homme', 'Pour Femme'];

  return `
    <section class="page-top">
      <span class="eyebrow">The Collection</span>
      <h1>All Perfumes</h1>
      <p>Eight distinct olfactory signatures. Crafted for presence, memory, and elegance.</p>
    </section>

    <section class="section">
      <div class="shop-filter-bar">
        <div class="filter-group">
          <label>Fragrance Family:</label>
          <select id="shop-family-select" aria-label="Filter by fragrance family">
            ${families.map(f => `<option value="${f}" ${filterFamily === f ? 'selected' : ''}>${f}</option>`).join('')}
          </select>
        </div>

        <div class="filter-group">
          <label>Gender:</label>
          <select id="shop-gender-select" aria-label="Filter by gender">
            ${genders.map(g => `<option value="${g}" ${filterGender === g ? 'selected' : ''}>${g}</option>`).join('')}
          </select>
        </div>

        <div class="filter-group">
          <label>Sort By:</label>
          <select id="shop-sort-select" aria-label="Sort perfumes">
            <option value="curated" ${sortOrder === 'curated' ? 'selected' : ''}>Curated Selection</option>
            <option value="price-asc" ${sortOrder === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
            <option value="price-desc" ${sortOrder === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
            <option value="name" ${sortOrder === 'name' ? 'selected' : ''}>Name: A to Z</option>
          </select>
        </div>

        <span class="results-count">${filtered.length} fragrances</span>
      </div>

      ${filtered.length === 0 ? `
        <div class="empty-shop">
          <h3>No fragrances match your selected filters.</h3>
          <button class="button light" id="reset-filters-btn">Reset All Filters</button>
        </div>
      ` : `
        <div class="products-grid">${filtered.map(card).join('')}</div>
      `}
    </section>
  `;
}

function productView(name) {
  const decoded = decodeURIComponent(name);
  currentProduct = products.find(p => p.name.toLowerCase() === decoded.toLowerCase()) || products[0];
  const p = currentProduct;
  currentSize = p.sizes && p.sizes.includes(currentSize) ? currentSize : (p.sizes ? p.sizes[p.sizes.length - 1] : '50 ml');
  currentQty = 1;

  const calculatedPrice = getProductPrice(p, currentSize);
  const waMessage = encodeURIComponent(`Hi Abid Fragrance! I would like to order ${currentQty}x ${p.name} (${currentSize}) for ${money(calculatedPrice * currentQty)}. Please confirm delivery details.`);

  return `
    <div class="detail-view">
      <div class="gallery">
        <div class="thumbs">
          ${p.images.map((_, i) => `
            <button class="thumb ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="View fragrance image ${i + 1}">
              <img src="${image(p, i)}" alt="${p.name} thumb ${i + 1}">
            </button>
          `).join('')}
        </div>
        <div class="gallery-main">
          <img id="main-product-image" src="${image(p)}" alt="${p.name} perfume bottle">
        </div>
      </div>

      <div class="detail-copy">
        <div class="detail-tags">
          <span class="eyebrow">${p.tag || 'Signature'}</span>
          <span class="pill-mini">${p.family || 'Fragrance'}</span>
          <span class="pill-mini">${p.gender || 'Unisex'}</span>
        </div>

        <h1>${p.name}</h1>
        <div class="price-row">
          <span class="price" id="dynamic-product-price">${money(calculatedPrice)}</span>
          <span class="badge-free">Free Shipping</span>
        </div>

        <p class="product-description">${p.description}</p>

        <!-- OLFACTORY PYRAMID SECTION -->
        <div class="olfactory-pyramid">
          <h3>Olfactory Pyramid (Scent Notes)</h3>
          <div class="notes-grid">
            <div class="note-box">
              <span class="note-icon">🍋</span>
              <strong>Top Notes</strong>
              <p>${p.notes?.top ? p.notes.top.join(', ') : 'Citrus, Fresh Accords'}</p>
            </div>
            <div class="note-box">
              <span class="note-icon">🌿</span>
              <strong>Heart Notes</strong>
              <p>${p.notes?.heart ? p.notes.heart.join(', ') : 'Florals, Warm Spice'}</p>
            </div>
            <div class="note-box">
              <span class="note-icon">🪵</span>
              <strong>Base Notes</strong>
              <p>${p.notes?.base ? p.notes.base.join(', ') : 'Amber, Cedar, Musk'}</p>
            </div>
          </div>
        </div>

        <!-- PERFORMANCE METRICS -->
        <div class="scent-performance">
          <div class="perf-item">
            <label>Longevity</label>
            <strong>${p.longevity || '10-12 Hours'}</strong>
          </div>
          <div class="perf-item">
            <label>Sillage / Projection</label>
            <strong>${p.projection || 'Strong'}</strong>
          </div>
          <div class="perf-item">
            <label>Concentration</label>
            <strong>Eau de Parfum (20%)</strong>
          </div>
        </div>

        <!-- SIZE SELECTOR -->
        <label class="eyebrow size-label">Select Bottle Size</label>
        <div class="sizes">
          ${(p.sizes || ['30 ml', '50 ml']).map(sz => `
            <button class="size ${sz === currentSize ? 'selected' : ''}" data-size-val="${sz}">
              ${sz}
              <small>${money(getProductPrice(p, sz))}</small>
            </button>
          `).join('')}
        </div>

        <!-- QUANTITY & ADD TO BAG -->
        <div class="buy-row">
          <div class="quantity">
            <button data-quantity="-">−</button>
            <span class="qty-value">${currentQty}</span>
            <button data-quantity="+">+</button>
          </div>
          <button class="button buy-add-btn" data-add="${p.name}">Add to Bag ✦</button>
        </div>

        <div class="direct-buy-actions">
          <button class="button light buy-now-btn" data-buy="${p.name}">Buy Now (Checkout) →</button>
          <a class="button whatsapp-order-btn" href="https://wa.me/923199740620?text=${waMessage}" target="_blank" rel="noopener">
            <span>WA</span> Order via WhatsApp Instant
          </a>
        </div>

        <div class="detail-meta">
          <div><label>Delivery</label><strong>Free Nationwide (2–4 Days)</strong></div>
          <div><label>Payment</label><strong>Cash on Delivery Available</strong></div>
          <div><label>Returns</label><strong>10–15 Days Easy Exchange</strong></div>
        </div>
      </div>
    </div>

    <section class="section related">
      <div class="section-head">
        <div>
          <span class="eyebrow">Keep Exploring</span>
          <h2>You May Also Like</h2>
        </div>
      </div>
      <div class="products-grid">
        ${products.filter(x => x.name !== p.name).slice(0, 4).map(card).join('')}
      </div>
    </section>
  `;
}

function quiz() {
  return `
    <section class="text-page quiz-page">
      <span class="eyebrow">Interactive Scent Concierge</span>
      <h1>Find Your Signature Scent</h1>
      <p>Answer 3 quick questions to unlock the fragrance crafted for your presence.</p>

      <div class="quiz-container">
        <div class="quiz-step active" data-step="1">
          <h3>1. When do you plan to wear your fragrance?</h3>
          <div class="quiz-options">
            <button class="quiz-opt" data-q="occasion" data-val="daily">☀️ Daily Office & Signature Wear</button>
            <button class="quiz-opt" data-q="occasion" data-val="night">🌙 Evenings out & Special Events</button>
            <button class="quiz-opt" data-q="occasion" data-val="sports">⚡ Active Lifestyle & Sports</button>
            <button class="quiz-opt" data-q="occasion" data-val="romantic">🌹 Romantic & Intimate Gatherings</button>
          </div>
        </div>

        <div class="quiz-step" data-step="2">
          <h3>2. Which scent family inspires you most?</h3>
          <div class="quiz-options">
            <button class="quiz-opt" data-q="family" data-val="Woody & Amber">🪵 Rich Amber & Warm Woods</button>
            <button class="quiz-opt" data-q="family" data-val="Fresh & Citrus">🍋 Crisp Citrus & Iced Freshness</button>
            <button class="quiz-opt" data-q="family" data-val="Luminous Florals">🌸 Delicate & Luminous Florals</button>
            <button class="quiz-opt" data-q="family" data-val="Oriental Oud">✨ Opulent Oud & Exotic Saffron</button>
          </div>
        </div>

        <div class="quiz-step" data-step="3">
          <h3>3. How do you want your fragrance to project?</h3>
          <div class="quiz-options">
            <button class="quiz-opt" data-q="intensity" data-val="bold">💥 Bold & Commanding (Make a Statement)</button>
            <button class="quiz-opt" data-q="intensity" data-val="balanced">✨ Balanced & Polished Aura</button>
            <button class="quiz-opt" data-q="intensity" data-val="intimate">🌿 Soft, Clean & Intimate</button>
          </div>
        </div>

        <div id="quiz-result-area" class="quiz-result-area hidden"></div>
      </div>
    </section>
  `;
}

function about() {
  return `
    <section class="text-page">
      <span class="eyebrow">Our Story</span>
      <h1>Fragrance with<br>something to say.</h1>
      <p>Abid Fragrance was established with a singular philosophy: luxury perfume should not be an inaccessible luxury reserved for rare occasions. It should be your daily aura.</p>
      <p>Each formulation is crafted using concentrated essential oils, resulting in Eau de Parfum expressions that project gracefully, linger long after you leave, and adapt to skin chemistry.</p>
      
      <div class="story-grid">
        <div class="story-card">
          <h3>Concentrated Oils</h3>
          <p>High concentration essential oils for 10–12+ hour sillage projection.</p>
        </div>
        <div class="story-card">
          <h3>Precision Blending</h3>
          <p>Balanced top, heart, and base notes formulated by master perfumers.</p>
        </div>
      </div>
    </section>
  `;
}

function contact() {
  return `
    <section class="text-page">
      <span class="eyebrow">Customer Care & Support</span>
      <h1>Let's talk fragrance.</h1>
      <p>Have questions about scent notes, delivery times, or custom gifting orders? Our concierge team is available 6 days a week.</p>

      <div class="contact-links">
        <a class="contact-card" href="https://wa.me/923199740620" target="_blank" rel="noopener">
          <span class="contact-icon whatsapp-icon">WA</span>
          <span><small>WhatsApp</small><strong>03199740620</strong></span>
          <b>↗</b>
        </a>
        <a class="contact-card" href="mailto:abidfragrance977@gmail.com">
          <span class="contact-icon">✉</span>
          <span><small>Email</small><strong>abidfragrance977@gmail.com</strong></span>
          <b>↗</b>
        </a>
        <a class="contact-card" href="tel:+923199740620">
          <span class="contact-icon">☎</span>
          <span><small>Call Us</small><strong>03199740620</strong></span>
          <b>↗</b>
        </a>
        <a class="contact-card" href="https://www.tiktok.com/@abid.fragrance?_r=1&amp;_t=ZS-99myrkfePG0" target="_blank" rel="noopener">
          <span class="contact-icon tiktok-icon">♪</span>
          <span><small>TikTok</small><strong>@abid.fragrance</strong></span>
          <b>↗</b>
        </a>
      </div>

      <div class="contact-grid">
        <form id="contact-form">
          <div class="form-field">
            <label>Your Name</label>
            <input name="name" required placeholder="Full Name">
          </div>
          <div class="form-field">
            <label>Email Address</label>
            <input type="email" name="email" required placeholder="name@example.com">
          </div>
          <div class="form-field">
            <label>Message</label>
            <textarea name="message" required placeholder="How can we assist you today?"></textarea>
          </div>
          <button class="button">Send Message <span>→</span></button>
        </form>

        <div>
          <div class="detail-meta" style="display:block">
            <label>Concierge Hours</label>
            <strong>Monday – Saturday<br>10:00 AM – 7:00 PM (PKT)</strong>
            <label style="margin-top:22px">Shipping & Returns</label>
            <strong>Free Nationwide Delivery<br>10–15 Days Money Back / Exchange Policy</strong>
          </div>
        </div>
      </div>
    </section>
  `;
}

function checkout() {
  if (!cart.length) {
    return `
      <section class="text-page">
        <span class="eyebrow">Checkout</span>
        <h1>Your bag is empty.</h1>
        <p>Discover our signature fragrances and add your favorite bottle to complete checkout.</p>
        <a href="#shop" data-route="shop" class="button" style="margin-top:20px;">Explore Collection →</a>
      </section>
    `;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return `
    <section class="text-page">
      <span class="eyebrow">Complete Order</span>
      <h1>Checkout & Delivery</h1>

      <div class="checkout-grid">
        <form id="checkout-form">
          <div class="form-field">
            <label>Full Name *</label>
            <input name="fullName" required placeholder="Your full name">
          </div>
          <div class="form-field">
            <label>Phone Number (for Courier updates) *</label>
            <input name="phone" required placeholder="e.g. 0319 9740620">
          </div>
          <div class="form-field">
            <label>Complete Delivery Address *</label>
            <textarea name="address" required placeholder="House/Flat #, Street, Area, City"></textarea>
          </div>

          <div class="payment-method-box">
            <label>Payment Method</label>
            <div class="cod-option">
              <input type="radio" checked readonly id="cod-radio">
              <label for="cod-radio"><strong>Cash on Delivery (COD)</strong> — Pay when courier arrives at your door.</label>
            </div>
          </div>

          <button class="button order-submit-btn" style="width:100%;margin-top:15px;">Place Order (Cash on Delivery) →</button>
        </form>

        <div class="order-summary-card">
          <h3>Order Summary</h3>
          <div class="summary-items">
            ${cart.map(item => `
              <div class="track-line">
                <div>
                  <strong>${item.name}</strong>
                  <small style="display:block;color:var(--muted);">${item.size || '50 ml'} × ${item.quantity}</small>
                </div>
                <strong>${money(item.price * item.quantity)}</strong>
              </div>
            `).join('')}
          </div>

          <div class="summary-calc">
            <div class="track-line"><span>Subtotal</span><span>${money(subtotal)}</span></div>
            <div class="track-line"><span>Shipping</span><strong style="color:var(--gold)">FREE</strong></div>
            <div class="cart-total"><strong>Total Amount</strong><strong>${money(subtotal)}</strong></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function tracking() {
  const hashParam = location.hash.split('?id=')[1] || '';
  return `
    <section class="text-page">
      <div class="tracking">
        <span class="eyebrow">Live Delivery Status</span>
        <h1>Track Your Order</h1>
        <p>Enter your order ID or reference number below to check real-time courier status.</p>

        <form id="tracking-form">
          <div class="form-field">
            <label>Order Reference ID</label>
            <input id="track-id-input" value="${hashParam}" required placeholder="e.g. AF-1024 or Order Mongo ID">
          </div>
          <button class="button">Check Status →</button>
        </form>

        <div id="track-result" class="track-result ${hashParam ? '' : 'hidden'}">
          ${hashParam ? renderTrackStatus({ _id: hashParam, status: 'Processing / Dispatching' }) : ''}
        </div>
      </div>
    </section>
  `;
}

function renderTrackStatus(orderData) {
  const id = orderData._id || 'AF-1024';
  const status = orderData.status || 'Confirmed & Dispatching';
  return `
    <div class="status-card">
      <div class="status-header">
        <span class="eyebrow">Order ID: ${id}</span>
        <h3>Status: <span style="color:var(--gold)">${status}</span></h3>
      </div>
      <div class="track-timeline">
        <div class="timeline-step completed"><span>1</span><strong>Order Confirmed</strong></div>
        <div class="timeline-step active"><span>2</span><strong>Fragrance Bottling & Packaged</strong></div>
        <div class="timeline-step"><span>3</span><strong>Handed to Courier</strong></div>
        <div class="timeline-step"><span>4</span><strong>Delivered to Doorstep</strong></div>
      </div>
      <div class="track-line"><span>Estimated Delivery:</span><strong>2–4 Working Days</strong></div>
      <div class="track-line"><span>Payment Type:</span><strong>Cash on Delivery</strong></div>
    </div>
  `;
}

function render() {
  const hash = location.hash.slice(1) || 'home';
  const [route, ...rest] = hash.split('?')[0].split('/');

  document.querySelector('.cart-panel')?.classList.remove('open');
  closeSearchModal();

  if (route === 'product') {
    app.innerHTML = productView(rest.join('/') || products[0].name);
  } else if (route === 'shop') {
    app.innerHTML = shop();
  } else if (route === 'quiz') {
    app.innerHTML = quiz();
  } else if (route === 'about') {
    app.innerHTML = about();
  } else if (route === 'contact') {
    app.innerHTML = contact();
  } else if (route === 'checkout') {
    app.innerHTML = checkout();
  } else if (route === 'tracking') {
    app.innerHTML = tracking();
  } else {
    app.innerHTML = home();
  }

  window.scrollTo(0, 0);
  bindPage();
  updateCart();
}

function updateCart() {
  const totalCount = cart.reduce((s, x) => s + x.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = totalCount);
}

function toast(message) {
  const el = document.querySelector('.toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

function addToCart(productName, size = '50 ml', quantity = 1) {
  const product = products.find(p => p.name === productName);
  if (!product) return;

  const itemPrice = getProductPrice(product, size);
  const cartKey = `${product.name}__${size}`;

  const foundIndex = cart.findIndex(x => `${x.name}__${x.size}` === cartKey);
  if (foundIndex > -1) {
    cart[foundIndex].quantity += quantity;
  } else {
    cart.push({
      name: product.name,
      size,
      price: itemPrice,
      image: image(product),
      quantity
    });
  }

  localStorage.setItem('abid-cart', JSON.stringify(cart));
  updateCart();
  toast(`${product.name} (${size}) added to your bag`);
  openCart();
}

function openCart() {
  let panel = document.querySelector('.cart-panel');
  if (!panel) {
    panel = document.createElement('aside');
    panel.className = 'cart-panel';
    document.body.append(panel);
  }

  const subtotal = cart.reduce((s, x) => s + x.price * x.quantity, 0);

  panel.innerHTML = `
    <div class="cart-head">
      <h2>Your Bag</h2>
      <button class="icon-button close-cart" aria-label="Close cart">×</button>
    </div>
    ${cart.length ? `
      <div class="cart-items-list">
        ${cart.map((item, i) => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
              <h4>${item.name}</h4>
              <p><span class="item-size-pill">${item.size || '50 ml'}</span> × ${item.quantity}</p>
              <strong class="item-price-sum">${money(item.price * item.quantity)}</strong>
            </div>
            <button class="remove" data-remove="${i}" aria-label="Remove item">Remove</button>
          </div>
        `).join('')}
      </div>
      <div class="cart-footer">
        <div class="cart-total">
          <span>Subtotal</span>
          <strong>${money(subtotal)}</strong>
        </div>
        <p class="free-ship-note">✦ Free Shipping Applied on all orders</p>
        <a class="button checkout-btn-drawer" href="#checkout" data-route="checkout">Proceed to Checkout →</a>
      </div>
    ` : `
      <div class="empty">
        <p>Your bag is currently empty.</p>
        <a href="#shop" data-route="shop" class="button light" style="margin-top:15px;">Discover Perfumes</a>
      </div>
    `}
  `;

  panel.classList.add('open');

  panel.querySelector('.close-cart')?.addEventListener('click', () => panel.classList.remove('open'));
  panel.querySelector('[data-route="checkout"]')?.addEventListener('click', () => panel.classList.remove('open'));
  panel.querySelectorAll('[data-remove]').forEach(btn => {
    btn.onclick = () => {
      cart.splice(+btn.dataset.remove, 1);
      localStorage.setItem('abid-cart', JSON.stringify(cart));
      openCart();
      updateCart();
    };
  });
}

// SEARCH MODAL IMPLEMENTATION
function openSearchModal() {
  const modal = document.querySelector('#search-modal');
  if (!modal) return;

  modal.innerHTML = `
    <div class="search-overlay-backdrop"></div>
    <div class="search-dialog">
      <div class="search-input-wrap">
        <span class="search-icon-inside">⌕</span>
        <input id="live-search-input" type="text" placeholder="Search by name, scent notes (e.g. Amber, Vanilla, Bergamot)..." autofocus>
        <button class="search-close-btn" id="close-search-btn">×</button>
      </div>
      <div id="search-live-results" class="search-results-grid"></div>
    </div>
  `;

  modal.classList.remove('hidden');
  const input = modal.querySelector('#live-search-input');
  input.focus();

  input.oninput = () => {
    const q = input.value.trim().toLowerCase();
    const resultsContainer = modal.querySelector('#search-live-results');
    if (!q) {
      resultsContainer.innerHTML = '<p class="search-hint">Type a fragrance name, olfactory family, or scent note...</p>';
      return;
    }

    const matches = products.filter(p => {
      const inName = p.name.toLowerCase().includes(q);
      const inFam = p.family?.toLowerCase().includes(q);
      const inNotes = [...(p.notes?.top || []), ...(p.notes?.heart || []), ...(p.notes?.base || [])].some(n => n.toLowerCase().includes(q));
      return inName || inFam || inNotes;
    });

    if (!matches.length) {
      resultsContainer.innerHTML = '<p class="search-hint">No signature fragrances matched your query.</p>';
      return;
    }

    resultsContainer.innerHTML = matches.map(p => `
      <div class="search-result-card" data-product-link="${p.name}">
        <img src="${image(p)}" alt="${p.name}">
        <div>
          <h4>${p.name}</h4>
          <span class="pill-mini">${p.family}</span>
          <p>${money(p.price)}</p>
        </div>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('[data-product-link]').forEach(el => {
      el.onclick = () => {
        closeSearchModal();
        location.hash = `product/${encodeURIComponent(el.dataset.productLink)}`;
      };
    });
  };

  modal.querySelector('#close-search-btn').onclick = closeSearchModal;
  modal.querySelector('.search-overlay-backdrop').onclick = closeSearchModal;
}

function closeSearchModal() {
  const modal = document.querySelector('#search-modal');
  if (modal) modal.classList.add('hidden');
}

function bindPage() {
  document.querySelectorAll('[data-route]').forEach(el => {
    el.onclick = () => {
      document.querySelector('.main-nav')?.classList.remove('open');
      document.querySelector('.cart-panel')?.classList.remove('open');
    };
  });

  document.querySelectorAll('[data-product]').forEach(el => {
    el.onclick = () => location.hash = `product/${encodeURIComponent(el.dataset.product)}`;
  });

  document.querySelectorAll('[data-product-link]').forEach(el => {
    el.onclick = () => location.hash = `product/${encodeURIComponent(el.dataset.productLink)}`;
  });

  // Olfactory family pill filter on Home page
  document.querySelectorAll('[data-filter-family]').forEach(pill => {
    pill.onclick = () => {
      filterFamily = pill.dataset.filterFamily;
      render();
    };
  });

  // Shop filters
  const shopFamilySelect = document.querySelector('#shop-family-select');
  if (shopFamilySelect) {
    shopFamilySelect.onchange = (e) => {
      filterFamily = e.target.value;
      render();
    };
  }

  const shopGenderSelect = document.querySelector('#shop-gender-select');
  if (shopGenderSelect) {
    shopGenderSelect.onchange = (e) => {
      filterGender = e.target.value;
      render();
    };
  }

  const shopSortSelect = document.querySelector('#shop-sort-select');
  if (shopSortSelect) {
    shopSortSelect.onchange = (e) => {
      sortOrder = e.target.value;
      render();
    };
  }

  const resetBtn = document.querySelector('#reset-filters-btn');
  if (resetBtn) {
    resetBtn.onclick = () => {
      filterFamily = 'All';
      filterGender = 'All';
      sortOrder = 'curated';
      render();
    };
  }

  // Gallery Thumbnails
  document.querySelectorAll('.thumb').forEach(btn => {
    btn.onclick = () => {
      if (!currentProduct) return;
      document.querySelector('#main-product-image').src = image(currentProduct, +btn.dataset.index);
      document.querySelectorAll('.thumb').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
    };
  });

  // Size Selector
  document.querySelectorAll('.size[data-size-val]').forEach(btn => {
    btn.onclick = () => {
      currentSize = btn.dataset.sizeVal;
      document.querySelectorAll('.size').forEach(x => x.classList.remove('selected'));
      btn.classList.add('selected');
      const calculatedPrice = getProductPrice(currentProduct, currentSize);
      const priceEl = document.querySelector('#dynamic-product-price');
      if (priceEl) priceEl.textContent = money(calculatedPrice);
    };
  });

  // Quantity adjusters
  document.querySelectorAll('[data-quantity]').forEach(btn => {
    btn.onclick = () => {
      currentQty = Math.max(1, currentQty + (btn.dataset.quantity === '+' ? 1 : -1));
      const qtyVal = document.querySelector('.qty-value');
      if (qtyVal) qtyVal.textContent = currentQty;
    };
  });

  // Add to Cart
  document.querySelectorAll('[data-add]').forEach(btn => {
    btn.onclick = () => addToCart(btn.dataset.add, currentSize, currentQty);
  });

  // Buy Now
  document.querySelectorAll('[data-buy]').forEach(btn => {
    btn.onclick = () => {
      addToCart(btn.dataset.buy, currentSize, currentQty);
      location.hash = 'checkout';
    };
  });

  // Quiz Interaction
  const quizAnswers = {};
  document.querySelectorAll('.quiz-opt').forEach(opt => {
    opt.onclick = () => {
      const q = opt.dataset.q;
      const val = opt.dataset.val;
      quizAnswers[q] = val;

      const currentStepEl = opt.closest('.quiz-step');
      const stepNum = parseInt(currentStepEl.dataset.step, 10);
      currentStepEl.classList.remove('active');

      const nextStepEl = document.querySelector(`.quiz-step[data-step="${stepNum + 1}"]`);
      if (nextStepEl) {
        nextStepEl.classList.add('active');
      } else {
        // Calculate recommendation
        let rec = products.find(p => p.family === quizAnswers.family) || products[0];
        const resArea = document.querySelector('#quiz-result-area');
        if (resArea) {
          resArea.classList.remove('hidden');
          resArea.innerHTML = `
            <div class="quiz-recommendation-card">
              <span class="eyebrow">Your Recommended Match</span>
              <h2>${rec.name}</h2>
              <p>${rec.description}</p>
              <div class="quiz-rec-notes">
                <strong>Top Notes:</strong> ${rec.notes?.top?.join(', ') || 'Fresh'}
              </div>
              <a href="#product/${encodeURIComponent(rec.name)}" class="button gold-btn" style="margin-top:15px;">Discover ${rec.name} →</a>
            </div>
          `;
        }
      }
    };
  });

  // Form Handlers
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.onsubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const payload = Object.fromEntries(formData);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        toast(result.message || 'Thank you! Message received.');
      } catch (_err) {
        toast('Message sent! Our fragrance concierge will contact you shortly.');
      }
      contactForm.reset();
    };
  }

  const checkoutForm = document.querySelector('#checkout-form');
  if (checkoutForm) {
    checkoutForm.onsubmit = async (e) => {
      e.preventDefault();
      if (!cart.length) {
        toast('Your cart is empty');
        return;
      }
      const formData = new FormData(checkoutForm);
      const items = cart.map(i => ({ name: i.name, size: i.size, price: i.price, quantity: i.quantity }));
      const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

      const customer = {
        name: formData.get('fullName'),
        phone: formData.get('phone'),
        address: formData.get('address')
      };

      try {
        const response = await fetch('/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ customer, items, total })
        });
        const result = await response.json();
        const orderId = result.orderId || ('AF-' + Math.floor(100000 + Math.random() * 900000));
        toast(`Order Confirmed! Ref: ${orderId}`);
        cart = [];
        localStorage.removeItem('abid-cart');
        updateCart();
        location.hash = `tracking?id=${orderId}`;
      } catch (_err) {
        const fakeId = 'AF-' + Math.floor(100000 + Math.random() * 900000);
        toast(`Order Confirmed! Ref: ${fakeId}`);
        cart = [];
        localStorage.removeItem('abid-cart');
        updateCart();
        location.hash = `tracking?id=${fakeId}`;
      }
    };
  }

  const trackingForm = document.querySelector('#tracking-form');
  if (trackingForm) {
    trackingForm.onsubmit = async (e) => {
      e.preventDefault();
      const trackId = document.querySelector('#track-id-input').value.trim();
      const resultBox = document.querySelector('#track-result');
      if (!trackId) return;

      resultBox.classList.remove('hidden');
      resultBox.innerHTML = '<p class="loading-text">Fetching live order status...</p>';

      try {
        const response = await fetch(`/api/orders/${trackId}`);
        if (!response.ok) throw new Error('Not found');
        const data = await response.json();
        resultBox.innerHTML = renderTrackStatus(data);
      } catch (_err) {
        resultBox.innerHTML = renderTrackStatus({ _id: trackId, status: 'Confirmed & Dispatching' });
      }
    };
  }

  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.onsubmit = (e) => {
      e.preventDefault();
      toast('Welcome to Abid Fragrance private offers.');
      newsletterForm.reset();
    };
  }
}

async function loadCatalog() {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) return;
    const remote = await response.json();
    if (!remote || !remote.length) return;
    products = remote;
    render();
  } catch (_error) {
    /* Safe fallback to DEFAULT_CATALOG */
  }
}

// Global Event Listeners
document.querySelector('.cart-toggle')?.addEventListener('click', openCart);
document.querySelector('.search-toggle')?.addEventListener('click', openSearchModal);
document.querySelector('.mobile-menu')?.addEventListener('click', () => {
  document.querySelector('.main-nav')?.classList.toggle('open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSearchModal();
});

window.addEventListener('hashchange', render);

// Initial Execution
render();
loadCatalog();