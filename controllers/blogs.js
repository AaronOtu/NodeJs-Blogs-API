const Blogs = require("../models/blogs");
const Category = require("../models/categories");

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
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { title, body, category: categoryName } = req.body;
    if (!title || !body || !categoryName) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const blog = await Blogs.create({
      title,
      body,
      author: req.user._id,
      category: category._id,
      image: `/uploads/${req.file.filename}`,
    });

    res.status(201).json({ blog });
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).send(err.message);
    } else {
      console.error("Headers already sent, can't send response");
    }
  }
};

const GetBlog = async (req, res) => {
  try {
    const { id: postId } = req.params;
    const blogs = await Blogs.findById(postId);
    if (!blogs) {
      res.status(404).json({ message: "Blog not found" });
    }
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
