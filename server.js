const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const journalRoutes = require('./routes/journalRoutes');
const moodLogRoutes = require('./routes/moodLogRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/toto', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/api/users', userRoutes);
app.use('/api/journal', journalRoutes);
app.use('/api/mood', moodLogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
