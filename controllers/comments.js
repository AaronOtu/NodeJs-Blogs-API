const Comment = require("../models/comments");

const GetAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const GetComments = async (req, res) => {
  try {
    const { id: commentsId } = req.params;
    const comments = await Comment.findbyId(commentsId);
    if (!comments) {
      res.status(404).json({ message: `Comments not found` });
    }
    res.status(200).json({ comments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const CreateComment = async (req, res) => {
  try {
    const comments = await Comment.create(req.body);
    res.status(201).json({ comments });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const UpdateComment = async (req, res) => {
  try {
    const { id: commentId } = req.params;
    const comment = await Comment.findById(commentId, req.body, {
      runValidations: true,
      new: true,
    });
    if (!comment) {
      res
        .status(404)
        .json({ message: `comment with id ${commentId} is not found` });
      res
        .status(200)
        .json({
          message: `comment with id ${commentId} is successfully created`,
        });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const DeleteComment = async (req, res) => {
  try {
    const { id: commentId } = req.params;
    const comment = await Comment.Delete(commentId);
    if (!commentId) {
      res
        .status(404)
        .json({ message: `comment with id ${commentId} is not found` });
    }
    res.status(200).json({ comment });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  GetAllComments,
  GetComments,
  CreateComment,
  UpdateComment,
  DeleteComment,
};
