const express = require("express");
const router = express.Router();

const {
  createJournal,
  getJournals,
  analyzeJournal,
  getInsights
} = require("../controllers/journalController");

router.post("/", createJournal);
router.get("/:userId", getJournals);
router.post("/analyze", analyzeJournal);
router.get("/insights/:userId", getInsights);

module.exports = router;