import express from "express";
import { authCheck, checkAdmin } from "../middleware/authMiddleware.js";
import { addAboutUs, deleteAboutUs, getAboutUs, updateAboutus } from "../controller/aboutusController.js";

const router = express.Router();

router.post("/addaboutus", addAboutUs) 
router.put("/updateaboutus/:id", updateAboutus)
router.delete("/delete/:id", deleteAboutUs) 
router.get("/", getAboutUs)

export default router;