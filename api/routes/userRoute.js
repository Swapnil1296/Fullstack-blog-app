import {
  signOut,
  test,
  updateUser,
  userDelete,
} from "../controllers/user.update.controller.js";
import express from "express";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:userId", verifyToken, updateUser);
router.delete("/delete/:userId", verifyToken, userDelete);
router.post("/signout", signOut);

export default router;
