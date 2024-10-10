const Category = require("../models/categories");

const GetAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ categories });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const CreateCategory = async (req, res) => {
  try {
    const categories = await Category.create(req.body);
    res.status(201).json({ categories });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const GetCategory = async (req, res) => {
  try {
    const {id:categoryId} = req.params
    const categories = await Category.findById(categoryId)
    if(!categories){
      res.status(404).json({message: 'Category not found'})
    }
    res.status(200).json({categories})
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const UpdateCategory = async (req, res) => {
  try {
    const {id:categoryId} = req.params
    categories = await Category.findByIdAndUpdate(categoryId, req.body, {
      new: true,
      runValidator: true,
    })
    if (!categories) {
      res.status(404).json({ message: `Category with id ${categoryId} is not found` });
    }
  res.status(200).json({categories});
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const DeleteCategory = async (req, res) => {
  try {
    const {id: categoryId} = req.params
    const categories = await Category.findByIdAndDelete(categoryId)
    if(!categories){
      res.status(404).json({ message: `Category with id ${categoryId} is not found` })
    }
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
