const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");
router = express.Router();

const {
  GetAllCategories,
  CreateCategory,
  GetCategory,
  UpdateCategory,
  DeleteCategory
} = require("../controllers/categories");

router.use(authMiddleware)
router.route("/").get(GetAllCategories).post(CreateCategory);
router.route("/:id").get(GetCategory).put(UpdateCategory).delete(DeleteCategory)

module.exports = router;
