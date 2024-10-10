const express = require("express");
const router = express.Router();

const {
  GetAllComments,
  CreateComment,
  GetComment,
  DeleteComment,
  UpdateComment,
} = require("../controllers/comments");

router.route("/").get(GetAllComments).post(CreateComment);
router.route("/:id").get(GetComment).delete(DeleteComment).put(UpdateComment);

module.exports = router;
