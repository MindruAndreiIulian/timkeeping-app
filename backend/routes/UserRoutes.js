const express = require("express");
const {
    getAllUserEntries,
    createUserEntry,
    getUserEntryById,
    updateUserEntry,
    deleteUserEntry,
    patchInactiveUser

  } = require("../controllers/UserEntryController");
  const router = express.Router();
  router.route("/").get(getAllUserEntries)
  router.route("/").post(createUserEntry);
  router.route("/:id").get(getUserEntryById)
  router.route("/:id").put(updateUserEntry)
  router.route("/:id").delete(deleteUserEntry);
  router.route("/:id").patch(patchInactiveUser);
  module.exports = router;