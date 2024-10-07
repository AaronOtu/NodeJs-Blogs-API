const GetAllBlogs = async (req, res) => {
  try {
    res.status(200).send("Getting all blogs ...!");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const Createblog = async (req, res) => {
  try {
    res.status(200).send("Creating blog ...!");
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
