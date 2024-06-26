
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors()); 
app.use(express.json()); 

mongoose.connect('mongodb://localhost/toto', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true, 
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));
app.use('/api/users', userRoutes); 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
