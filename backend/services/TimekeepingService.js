const TimeEntry = require('../models/TimeEntry');
 
exports.getAllEntries = async () => {
  return await TimeEntry.find();
};
 
exports.createTimeEntry = async (entry) => {
  return await TimeEntry.create(entry);
};
exports.getEntryById = async (id) => {
  return await TimeEntry.findById(id);
};
 
exports.updateEntry = async (id, entry) => {
  return await TimeEntry.findByIdAndUpdate(id, entry);
 
};
 
exports.deleteEntry = async (id) => {
  return await TimeEntry.findByIdAndDelete(id);
};