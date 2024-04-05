const express = require('express');
const router = express.Router();
const JournalEntry = require('../models/JournalEntry');

router.post('/', async (req, res) => {
  try {
    const entry = new JournalEntry(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
