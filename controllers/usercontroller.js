
// userController.js

const User = require('../Models/user');


createUser = (req, res) => {
  const body = req.body
// console.log(body)
  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a user',
      })
  }

  const user = new User(body)

  if (!user) {
      return res.status(400).json({ success: false, error: err })
  }

  user
      .save()
      .then(() => {
          return res.status(201).json({
              success: true,
              id: user._id,
              message: 'user created!',
          })
      })
      .catch(err => {
          return res.status(400).json({
              error:err,
              message: 'user not created!',
          })
      })
}

updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    ).exec();
    if (!user) {
      return res.status(404).json({ success: false, error: `user not found` });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}
deleteuser = async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id }).exec();
    if (!user) {
      return res.status(404).json({ success: false, error: `user not found` });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}


getuserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
      return res.status(404).json({ success: false, error: `user not found` });
    }
    return res.status(200).json({ success: true, data: user });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}
getUsers = async (req, res) => {
    
  const users = await User.find({}).exec();
  if (!users.length) {
      return res.status(404).json({ success: false, error: 'user not found' });
  }
  return res.status(200).json({ success: true, data: users });

}
module.exports = {
  createUser,
  updateUser,
  deleteuser,
  getuserById,
  getUsers
  
}