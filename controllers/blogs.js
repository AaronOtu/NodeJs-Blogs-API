const Blogs = require("../models/blogs")


const GetAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find({})

    res.status(200).send({blogs});
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const Createblog = async (req, res) => {
  try {
    const blogs = await Blogs.create(req.body)
    res.status(201).json({blogs});
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const GetBlog = async (req, res) => {
  try {
    res.status(200).send("Getting blog by id ...!");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
const UpdateBlog = async (req, res) => {
  try {
    res.status(200).send("Updating blog");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const DeleteBlog = async (req, res) => {
  try {
    res.status(200).send("Deleting blog");
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
