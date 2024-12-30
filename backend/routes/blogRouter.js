import express from "express";
import { addBlogs, deleteBlog, getBlogs, updateBlogs } from "../controller/blogController.js";
import { authCheck, checkAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/", authCheck, addBlogs)
router.delete("/deleteblog/:id", authCheck, deleteBlog)
router.put("/updateblog/:id", updateBlogs) 
router.get("/", getBlogs)


export default router;