import express from "express";
import { addBlogs, deleteBlog, updateBlogs } from "../controller/blogController.js";

const router = express.Router();


router.post("/addblog", addBlogs)
router.delete("/delete/:id", deleteBlog)
router.put("/updateblog/:id", updateBlogs) 


export default router;