const dotenv = require("dotenv");
dotenv.config();

const secret = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === process.env.SECRET_KEY) {
    next();
  } else {
    res.status(403).json({ response: 403, message: "Forbidden: Invalid API key" });
  }
};

module.exports = secret;
