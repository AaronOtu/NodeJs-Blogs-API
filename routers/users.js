const express = require('express');
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const{RegisterUser,
      LoginUser,
      GetUserProfile,
      DeleteUserAccount,
      UpdateUserAccount


    } = require('../controllers/users')

router.route('/register').post(RegisterUser)
router.route('/login').post(LoginUser)
router.use(authMiddleware)
router.route("/:id").get(GetUserProfile).delete(DeleteUserAccount).put(UpdateUserAccount);



module.exports = router;