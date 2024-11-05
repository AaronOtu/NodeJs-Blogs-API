const Users = require("../models/users");

const RegisterUser = async (req, res) => {
  try {
    const users = await Users.create(req.body);
    const token = users.generateAuthToken();
    res.status(201).json({ users, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = user.generateAuthToken();

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const GetUserProfile = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const users = await Users.findById(userId);
    if (!users) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const DeleteUserAccount = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const users = await Users.findByIdAndDelete(userId);
    if (!users) {
      res.status(404).json({ message: `User with id ${userId} not found` });
    }
    res
      .status(200)
      .json({ message: `User with id ${userId} deleted successfully` });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const UpdateUserAccount = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const users = await Users.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidator: true,
    });
    if (!users) {
      res.status(404).json({ message: `User with id ${userId} is not found` });
    }
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  RegisterUser,
  GetUserProfile,
  DeleteUserAccount,
  UpdateUserAccount,
  LoginUser,
};
