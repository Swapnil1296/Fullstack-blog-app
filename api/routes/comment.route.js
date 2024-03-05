import express from "express";
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  getcomments,
  likeComment,
} from "../controllers/comment.controller.js";
import { verifyToken } from "./../utils/verifyUser.js";
import { checkTokenExpiry } from "../utils/tokenExpired.js";

const router = express.Router();

router.post("/create", verifyToken, checkTokenExpiry, createComment);
router.get("/getPostComments/:postId", getPostComments);
router.put(
  "/likeComment/:commentId",
  verifyToken,
  checkTokenExpiry,
  likeComment
);
router.put(
  "/editComment/:commentId",
  verifyToken,
  checkTokenExpiry,
  editComment
);
router.delete(
  "/deleteComment/:commentId",
  verifyToken,
  checkTokenExpiry,
  deleteComment
);
router.get("/getcomments", verifyToken, checkTokenExpiry, getcomments);

export default router;
