const dotenv = require("dotenv");
dotenv.config();
const jwt = require('jsonwebtoken');
const Users = require("../models/users");


const JWT_SECRET = process.env.JWT_SECRET; 

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    //console.log(JSON.stringify(decoded))
    req.user = await Users.findById(decoded._id);
    if (!req.user) {
      throw new Error();
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
