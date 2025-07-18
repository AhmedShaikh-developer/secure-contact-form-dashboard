const User    = require('../models/User');
const Message = require('../models/Message');

// GET /api/dashboard
exports.getStats = async (req, res, next) => {
  try {
    // Example stats: total users & total messages
    const [userCount, messageCount] = await Promise.all([
      User.countDocuments(),
      Message.countDocuments()
    ]);
    res.json({
      stats: {
        totalUsers: userCount,
        totalMessages: messageCount
      }
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/messages (admin‑only listing)
exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().sort('-createdAt');
    res.json({ messages });
  } catch (err) {
    next(err);
  }
};
