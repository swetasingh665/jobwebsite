const express = require("express");
const router = express.Router();
const transporter = require("../config/mailer"); // mailer file import

// JOB APPLY ROUTE
router.post("/apply", async (req, res) => {
  try {
    const { email } = req.body; // frontend se email aayega

    const mailOptions = {
      from: "yourmail@gmail.com",
      to: email,
      subject: "Job Applied Successfully",
      text: "You have successfully applied for the job",
    };

    await transporter.sendMail(mailOptions);

    res.send("Application submitted & email sent");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;