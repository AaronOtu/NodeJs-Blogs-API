const Users = require("../models/users");

const registerUser = async (req, res) => {
  try {
    const users = await Users.create(req.body);
    res.status(201).json({ users });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { registerUser };
