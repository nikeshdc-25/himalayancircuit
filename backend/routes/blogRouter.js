import express from "express";
import { addBlogs } from "../controller/blogController.js";

const router = express.Router();


router.post("/addblog", addBlogs)

export default router;