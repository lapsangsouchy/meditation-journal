const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Entry = require("../models/Entry");

// @route   GET api/entries
// @desc    Get all users entries
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const entries = await Entry.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/entries
// @desc    Add new entry
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check(
        "log",
        "Text required, even if you don't feel like it and type asdfjhal"
      )
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { date, log, effective, question } = req.body;

    try {
      const newEntry = new Entry({
        date,
        log,
        effective,
        question,
        user: req.user.id,
      });

      const entry = await newEntry.save();

      res.json(entry);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/entries/:id
// @desc    Update entry
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { date, log, effective, question } = req.body;

  // Build entry object
  const entryFields = {};
  if (date) entryFields.date = date;
  if (log) entryFields.log = log;
  if (effective) entryFields.effective = effective;
  if (question) entryFields.question = question;

  try {
    let entry = await Entry.findById(req.params.id);

    if (!entry) return res.status(404).json({ msg: "Entry not found" });

    // Make sure user owns entry
    if (entry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    entry = await Entry.findByIdAndUpdate(
      req.params.id,
      { $set: entryFields },
      { new: true }
    );

    res.json(entry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/entries/:id
// @desc    Delete entry
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let entry = await Entry.findById(req.params.id);

    if (!entry) return res.status(404).json({ msg: "Entry not found" });

    // Make sure user owns entry
    if (entry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Entry.findByIdAndRemove(req.params.id);

    res.json({ msg: "Entry Removed " });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
