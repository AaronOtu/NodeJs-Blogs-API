const express = require("express")
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

const {
  GetAllComments,
  CreateComment,
  GetComments,
  DeleteComment,
  UpdateComment,
} = require("../controllers/comments");

router.use(authMiddleware);
router.route("/").get(GetAllComments).post(CreateComment);
router.route("/:id").get(GetComments).delete(DeleteComment).put(UpdateComment);

module.exports = router;
