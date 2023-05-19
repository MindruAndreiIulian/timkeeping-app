const UserEntry = require('../models/UserEntry');

exports.getAllUserEntries = async () => {
    return UserEntry.find();
};
exports.createUserEntry = async (entry) => {
    return UserEntry.create(entry);
};
exports.getUserEntryById = async (id) => {
    return UserEntry.findById(id);
};
exports.updateUserEntry = async (id, entry) => {
    return UserEntry.findByIdAndUpdate(id, entry);
};
exports.deleteUserEntry = async (id) => {
    return UserEntry.findByIdAndDelete(id);
};
exports.setInactiveUser = async (id) => {
    const user = await UserEntry.findById(id);
    if (!user)
        throw new Error('user not found')

    return UserEntry.findByIdAndUpdate(id, { isActive: false })
}