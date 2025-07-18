const express = require('express');
const { check } = require('express-validator');
const { sendMessage } = require('../controllers/contactController');
const { protect }     = require('../middleware/authMiddleware');

const router = express.Router();

// Public or protected? Remove `protect` below if you want this public.
router.post(
  '/',
  protect,
  [
    check('name',    'Name is required').notEmpty(),
    check('email',   'Valid email is required').isEmail(),
    check('message', 'Message cannot be empty').notEmpty(),
  ],
  sendMessage
);

module.exports = router;
