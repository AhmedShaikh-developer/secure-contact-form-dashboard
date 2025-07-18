require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

const authRoutes      = require('./routes/authRoutes');
const contactRoutes   = require('./routes/contactRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const { errorHandler }= require('./middleware/errorMiddleware');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('🚀 API is running'));

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT, () =>
      console.log(`🖥 Server listening on http://localhost:${process.env.PORT}`)
    );
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });
