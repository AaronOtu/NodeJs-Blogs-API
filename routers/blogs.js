const express = require("express");
const authMiddleware = require("../middleware/authMiddleware")
router = express.Router();
upload = require("../middleware/uploadImage")
const {
  GetAllBlogs,
  Createblog,
  GetBlog,
  UpdateBlog,
  DeleteBlog
} = require("../controllers/blogs");

router.use(authMiddleware);
router.route("/").get(GetAllBlogs).post(upload.single('image'),Createblog);
router.route("/:id").get(GetBlog).put(UpdateBlog).delete(DeleteBlog);

module.exports = router;
