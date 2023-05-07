const UserEntry = require('../models/UserEntry');

exports.getAllUserEntries = async () => {
    return await UserEntry.find();
};
exports.createUserEntry = async (entry) => {
    return await UserEntry.create(entry);
};
exports.getUserEntryById = async (id) => {
    return await UserEntry.findById(id);
};
exports.updateUserEntry = async (id, entry) => {
    return await UserEntry.findByIdAndUpdate(id, entry);
};
exports.deleteUserEntry = async (id) => {
    return await UserEntry.findByIdAndDelete(id);
};