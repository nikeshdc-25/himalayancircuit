import express from "express";
import { authCheck, checkAdmin } from "../middleware/authMiddleware.js";
import { addGhumgham, deleteGhumgham, getGhumgham, getSingleGhumgham, updateGhumgham } from "../controller/ghumghamController.js";

const router = express.Router();
router.post("/", authCheck, addGhumgham)
router.get("/", getGhumgham)
router.delete("/delete/:id", authCheck, deleteGhumgham)
router.put("/update/:id", authCheck, updateGhumgham)
router.get("/:id", getSingleGhumgham)

export default router;