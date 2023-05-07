const express = require("express");
const {
    getAllUserEntries,
    createUserEntry,
    getUserEntryById,
    updateUserEntry,
    deleteUserEntry,
  } = require("../controllers/UserEntryController");
  const router = express.Router();
  router.route("/").get(getAllUserEntries).post(createUserEntry);
router.route("/:id").get(getUserEntryById).put(updateUserEntry).delete(deleteUserEntry);
module.exports = router;