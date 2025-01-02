import express from "express";
import { authCheck, checkAdmin } from "../middleware/authMiddleware.js";
import { addPackage, deletePackage, getPackage, getPackagesByCategory, getSinglePackage, updatePackage } from "../controller/packageController.js";

const router = express.Router();
router.post("/", authCheck, addPackage)
router.get("/", getPackage)
router.delete("/delete/:id", authCheck, deletePackage)
router.put("/update/:id", authCheck, updatePackage)
router.get("/:id", getSinglePackage)
router.get("/category/:category", getPackagesByCategory);

export default router;