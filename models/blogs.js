const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true, trim: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  image: { type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blogs", BlogsSchema);
