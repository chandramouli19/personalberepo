const express = require('express');
const router = express.Router();
const UserInfo = require('../models/UserInfo');

// Create a new user info document
router.post('/testsome', async (req, res) => {
  try {
   const basic = {
  "name": "John Doe",
  "description": "Software engineer",
  "emailid": "john@example.com",
  "contact": "1234567890",
  "position": "Developer",
  "sites": ["site1.com", "site2.com"]
}

    const userInfo = new UserInfo(basic);
    const savedUser = await userInfo.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all user info documents
router.get('/test', async (req, res) => {
  try {
    const users = await UserInfo.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
