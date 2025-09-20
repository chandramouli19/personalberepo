const UserInfo = require('../models/UserInfo');

const createUser = async (data) => {
  const user = new UserInfo(data);
  return await user.save();
};

const getAllUsers = async () => {
  return await UserInfo.find();
};

const deleteSingleUser = async (userinfouid)=>{
return await UserInfo.deleteOne({userinfouid})
}

const getUserById = async (userinfouid)=>{
  console.log(userinfouid)
return await UserInfo.findOne({ userinfouid: userinfouid })
}

const deleteallusers = async () =>{
  return await UserInfo.deleteMany()
}

module.exports = {
  createUser,
  getAllUsers,
  deleteSingleUser,
  getUserById,
  deleteallusers
};
