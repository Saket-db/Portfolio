const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // App password from Gmail settings
  },
});

app.post("/send", async (req, res) => {
  const { from_email, from_name, subject, message } = req.body;
  
  const mailOptions = {
    from: from_email,
    to: process.env.EMAIL_USER, // Your receiving email
    subject: `Contact Form: ${subject}`,
    text: `From: ${from_name} (${from_email})\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message Sent Successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error sending message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
