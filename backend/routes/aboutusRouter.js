import express from "express";
import { authCheck, checkAdmin } from "../middleware/authMiddleware.js";
import { addAboutUs, updateAboutus } from "../controller/aboutusController.js";

const router = express.Router();

router.post("/addaboutus", addAboutUs)
router.put("/updateaboutus/:id", updateAboutus)
export default router;