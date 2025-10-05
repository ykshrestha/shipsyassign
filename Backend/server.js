const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
const cors = require('cors');
app.use(cors());


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected.'))
.catch(err => console.error('MongoDB connection error:', err));


const authRoutes = require('./routes/auth');
console.log('authRoutes:', typeof authRoutes);
app.use('/api/auth', authRoutes);

const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);


app.post('/test', (req, res) => {
  res.send('Test OK');
});


// Simple test route
app.get('/', (req, res) => {
    res.send('API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
