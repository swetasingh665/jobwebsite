const express = require("express");
const router = express.Router();
const transporter = require("../config/mailer");

router.post("/send-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: "yourEmail@gmail.com",
      to: "test@gmail.com",
      subject: "Hello",
      text: "Email from backend",
    });

    res.send("Email sent");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;