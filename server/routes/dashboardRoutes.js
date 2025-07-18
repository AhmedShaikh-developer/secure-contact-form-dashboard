const express = require('express');
const { getStats, getAllMessages } = require('../controllers/dashboardController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Dashboard stats (protected)
router.get('/stats', protect, getStats);

// List all messages (protected; treat all authenticated users as admins for now)
router.get('/messages', protect, getAllMessages);

module.exports = router;
