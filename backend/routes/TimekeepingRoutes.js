const express = require("express");
const {
  getAllEntries,
  createEntry,
  getEntryById,
  updateEntry,
  deleteEntry,
} = require("../controllers/TimekeepingController");
 
const router = express.Router();
 
router.route("/").get(getAllEntries).post(createEntry);
router.route("/:id").get(getEntryById).put(updateEntry).delete(deleteEntry);
 
module.exports = router;