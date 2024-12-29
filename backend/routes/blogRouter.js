import express from "express";
import { addBlogs } from "../controller/blogController.js";
import { checkAdmin, checkBlogAdmin } from "../middleware/authMiddleware";

const router = express.Router();


router.post("/addblog", checkBlogAdmin, checkAdmin, addBlogs)

export default router;