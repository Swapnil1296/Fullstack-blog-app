import express from "express";
import {
  creatPost,
  deletepost,
  getPosts,
  updatepost,
} from "../controllers/post.controller.js";
import { verifyToken } from "./../utils/verifyUser.js";
import { checkTokenExpiry } from "../utils/tokenExpired.js";

const router = express.Router();

router.post("/create", verifyToken, checkTokenExpiry, creatPost);
router.get("/getposts", getPosts);
router.delete(
  "/deletepost/:postId/:userId",
  verifyToken,
  checkTokenExpiry,
  deletepost
);
router.put(
  "/updatepost/:postId/:userId",
  verifyToken,
  checkTokenExpiry,
  updatepost
);

export default router;
