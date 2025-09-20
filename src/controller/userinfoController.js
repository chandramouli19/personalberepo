const express = require('express');
// const UserInfo = require('../models/UserInfo');
const userService = require('../services/userServices');

const createUser = async (req,res) =>{
    console.log('req.body',req.body)
    const data = userService.createUser(req.body)
     res.status(200).json({ message: 'User created', user: data });
}

const getUserinfo = async (req,res) =>{
const data = await userService.getUserById(req.query.id)
 res.status(200).json({ message: 'User created', user: data });
}

const getUser = async(req,res) =>{
    const data = await userService.getAllUsers()
    console.log(data)
    res.status(200).json(data)
}

const deleteWholeData = (req,res) =>{
    const data = userService.deleteallusers()
    res.status(200).json({message:"deleted"})
}


module.exports = {createUser,getUserinfo,getUser,deleteWholeData}