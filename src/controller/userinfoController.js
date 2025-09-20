const express = require('express');
// const UserInfo = require('../models/UserInfo');
const userService = require('../services/userService');

const createUser = async (req,res) =>{
    const data = userService.createUser(req.body)
     res.status(200).json({ message: 'User created', user: data });
}

const getUserinfo = (req,res) =>{
const data = userService.getUserById(req.query)
 res.status(200).json({ message: 'User created', user: data });
}

module.exports = {createUser,getUserinfo}