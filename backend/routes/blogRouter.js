import express from "express";
import { addBlogs, deleteBlog, getBlogs, updateBlogs } from "../controller/blogController.js";
import { authCheck, checkAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/", authCheck, addBlogs)
router.delete("/delete/:id", authCheck, deleteBlog)
router.put("/update/:id", updateBlogs) 
router.get("/", getBlogs)


export default router;