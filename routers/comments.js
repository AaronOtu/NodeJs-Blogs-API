const express = require("express");
const router = express.Router();

const {
  GetAllComments,
  CreateComment,
  GetComments,
  DeleteComment,
  UpdateComment,
} = require("../controllers/comments");

router.route("/").get(GetAllComments).post(CreateComment);
router.route("/:id").get(GetComments).delete(DeleteComment).put(UpdateComment);

module.exports = router;
