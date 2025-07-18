require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

const authRoutes  = require('./routes/authRoutes');
const { protect } = require('./middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

// Health‑check
app.get('/', (req, res) => {
  res.send('🚀 Express server is up and running!');
});

// Authentication routes
app.use('/api/auth', authRoutes);

// Example protected route
app.get('/api/protected', protect, (req, res) => {
  res.json({ message: `Welcome, ${req.user.name}!` });
});

// Connect to MongoDB & start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT, () =>
      console.log(`🖥 Server listening on http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => console.error('❌ MongoDB error:', err.message));
