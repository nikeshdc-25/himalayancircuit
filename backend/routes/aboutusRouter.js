import express from "express";
import { addAboutUs, deleteAboutUs, getAboutUs, updateAboutus } from "../controller/aboutusController.js";
import { authCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addaboutus", addAboutUs) 
router.put("/updateaboutus/:id", updateAboutus)
router.delete("/delete/:id", authCheck, deleteAboutUs) 
router.get("/", getAboutUs)

export default router;