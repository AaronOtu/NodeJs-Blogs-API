const express = require("express");
router = express.Router();
const {
  GetAllBlogs,
  Createblog,
  GetBlog,
  UpdateBlog,
  DeleteBlog
} = require("../controllers/blogs");

router.route("/").get(GetAllBlogs).post(Createblog);
router.route("/:id").get(GetBlog).put(UpdateBlog).delete(DeleteBlog);

module.exports = router;
