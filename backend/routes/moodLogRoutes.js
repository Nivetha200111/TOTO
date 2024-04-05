const express = require('express');
const router = express.Router();
const MoodLog = require('../models/MoodLog');

router.post('/', async (req, res) => {
  try {
    const log = new MoodLog(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
