import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

// Signup & User List
router.route("/api/users")
  .post(userCtrl.create)
  .get(userCtrl.list);

// Single User routes (protected)
router.route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

// Param middleware
router.param("userId", userCtrl.userByID);

export default router;
