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

router.post("/create", verifyToken, creatPost);
router.get("/getposts", getPosts);
router.delete(
  "/deletepost/:postId/:userId",
  verifyToken,

  deletepost
);
router.put(
  "/updatepost/:postId/:userId",
  verifyToken,

  updatepost
);

export default router;
