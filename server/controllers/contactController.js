const { validationResult } = require('express-validator');
const nodemailer            = require('nodemailer');
const Message               = require('../models/Message');

// Configure your SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendMessage = async (req, res, next) => {
  // 1️⃣ Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;
  try {
    // 2️⃣ Save to DB
    const saved = await Message.create({ name, email, message });

    // 3️⃣ Send notification email
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `${message}\n\n— ${name} <${email}>`
    });

    // 4️⃣ Response
    res.status(201).json({
      message: 'Message sent and saved successfully',
      data: saved
    });
  } catch (err) {
    next(err);
  }
};
