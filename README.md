# Abid Fragrance

Full-stack perfume storefront with the existing Abid Fragrance layout preserved.

## Stack

- Express API
- MongoDB with Mongoose
- Existing responsive storefront UI
- REST endpoints for products, contact messages, orders, and health checks

## Run locally

1. Install Node.js 18+ and MongoDB.
2. Copy `.env.example` to `.env` and update `MONGODB_URI` if needed.
3. Install dependencies:

```bash
npm install
```

4. Seed the supplied perfume catalog:

```bash
npm run seed
```

5. Start the app:

```bash
npm run dev
```

Open `http://localhost:5000`.

## API

- `GET /api/health`
- `GET /api/products`
- `GET /api/products/:slug`
- `POST /api/contact`
- `POST /api/orders`
- `GET /api/orders/:id`

The app also remains previewable as `index.html` directly. In that mode it uses the built-in catalog and local cart so the current design remains available without a running server.
