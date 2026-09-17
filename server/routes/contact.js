import { Router } from 'express';
import ContactMessage from '../models/ContactMessage.js';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'Name, email, and message are required.' });
    await ContactMessage.create({ name, email, message });
    res.status(201).json({ message: 'Thank you. We will be in touch soon.' });
  } catch (error) { next(error); }
});

export default router;
