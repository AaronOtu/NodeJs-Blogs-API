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

router.route("/").get(GetAllBlogs).post(authMiddleware,upload.single('image'),Createblog);
router.route("/:id").get(GetBlog).put(UpdateBlog).delete(DeleteBlog);

module.exports = router;
