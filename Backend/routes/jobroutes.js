const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const adminCheck = require("../middleware/adminMiddleware");
const upload = require("../middleware/upload");

const Job = require("../models/Job");
const Application = require("../models/Application");


// ==========================
// GET ALL JOBS (PAGINATION)
// ==========================
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;

    const jobs = await Job.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ==========================
// SEARCH JOB
// ==========================
router.get("/search", async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const jobs = await Job.find({
      title: { $regex: keyword, $options: "i" },
    });

    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ==========================
// GET JOB BY ID
// ==========================
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ==========================
// CREATE JOB (ADMIN)
// ==========================
router.post("/create-job", auth, adminCheck, async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();

    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ==========================
// ADD JOB (ADMIN SIMPLE)
// ==========================
router.post("/admin/add", auth, async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();

    res.send("Job Added");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ==========================
// APPLY JOB (USER)
// ==========================
router.post("/apply", auth, async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    const application = new Application({
      userId,
      jobId,
    });

    await application.save();

    res.send("Applied Successfully");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ==========================
// UPLOAD RESUME
// ==========================
router.post("/upload-resume", upload.single("resume"), (req, res) => {
  try {
    res.json({
      message: "File uploaded successfully",
      file: req.file,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;