const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const UserInfo = new mongoose.Schema({
  userinfouid: {
    type: String,
    default: () => uuidv4(),  // Automatically generate GUID if not provided
    required: true,
    unique: true
  },
  name: { type: String, required: true },
  description: { type: String },
  emailid: { type: String, required: true, unique: true },
  contact: { type: String },
  position: { type: String },
  sites: [{ type: String }]
}, {
  timestamps: true
});

module.exports = mongoose.model('UserInfo', UserInfo);
