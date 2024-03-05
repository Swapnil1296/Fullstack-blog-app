import {
  getUser,
  getUsers,
  signOut,
  test,
  updateUser,
  userDelete,
} from "../controllers/user.update.controller.js";
import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { checkTokenExpiry } from "../utils/tokenExpired.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, checkTokenExpiry, updateUser);
router.delete("/delete/:userId", verifyToken, checkTokenExpiry, userDelete);
router.post("/signout", signOut);
router.get("/getusers", verifyToken, checkTokenExpiry, getUsers);
router.get("/:userId", getUser);

export default router;
