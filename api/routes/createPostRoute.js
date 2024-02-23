import express from "express";
import { creatPost, getPosts } from "../controllers/post.controller.js";
import { verifyToken } from "./../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, creatPost);
router.get("/getposts", getPosts);

export default router;
