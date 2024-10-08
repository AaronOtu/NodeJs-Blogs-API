const GetAllCategories = async (req, res) => {
  try {
    res.send("Getting all categories");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const CreateCategory = async (req, res) => {
  try {
    res.status(201).send("Creating category");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const GetCategory = async (req, res) => {
  try {
    res.status(200).send("Getting category");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const UpdateCategory = async (req, res) => {
  try {
    res.status(200).send("Updating category");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const DeleteCategory = async (req, res) => {
  try {
    res.status(200).send("Category deleted successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  GetAllCategories,
  CreateCategory,
  GetCategory,
  UpdateCategory,
  DeleteCategory,
};
