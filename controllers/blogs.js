const Blogs = require("../models/blogs");

const GetAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({});

    res.status(200).send({ blogs });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const Createblog = async (req, res) => {
  try {
    const blogs = await Blogs.create(req.body);
    res.status(201).json({ blogs });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const GetBlog = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const blogs = await Blogs.findById(postId);
    res.status(200).json({ blogs });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
const UpdateBlog = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const blogs = await Blogs.findByIdAndUpdate(postId, req.body, {
      new: true,
      runValidator: true,
    });
    if (!blogs) {
      res.status(404).json({ message: `Blog with id ${postId} is not found` });
    }
    res.status(200).json({ id: postId, data: req.body });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const DeleteBlog = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const blogs = await Blogs.findByIdAndDelete(postId);
    if (!blogs) {
      res.status(404).json({ message: `Blog with id ${postId} not found` });
    }
    res
      .status(200)
      .json({ message: `Blog with id ${postId} deleted successfully` });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  GetAllBlogs,
  Createblog,
  GetBlog,
  UpdateBlog,
  DeleteBlog,
};
