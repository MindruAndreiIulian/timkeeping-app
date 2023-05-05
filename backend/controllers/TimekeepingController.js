const timekeepingService = require("../services/TimekeepingService");
 
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await timekeepingService.getAllEntries();
    res.json({ data: entries, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createEntry = async (req, res) => {
  try {
    const entry = await timekeepingService.createTimeEntry(req.body);
    res.json({ data: entry, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getEntryById = async (req, res) => {
  try {
    const entry = await timekeepingService.getEntryById(req.params.id);
    res.json({ data: entry, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateEntry = async (req, res) => {
  try {
    const entry = await timekeepingService.updateEntry(req.params.id, req.body);
    res.json({ data: entry, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteEntry = async (req, res) => {
  try {
    const entry = await timekeepingService.deleteEntry(req.params.id);
    res.json({ data: entry, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};