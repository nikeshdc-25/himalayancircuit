import express from "express";
import { authCheck, checkAdmin } from "../middleware/authMiddleware.js";
import { addPackage, deletePackage, getClimbingOnly, getCulturalTourOnly, getPackage, getPackagesByCategory, getSinglePackage, getTourOnly, getTrekkingOnly, updatePackage } from "../controller/packageController.js";

const router = express.Router();
router.post("/", authCheck, addPackage)
router.get("/", getPackage)
router.get("/tour", getTourOnly)
router.get("/trekking", getTrekkingOnly)
router.get("/culturaltour", getCulturalTourOnly)
router.get("/climbing", getClimbingOnly)
router.delete("/delete/:id", authCheck, deletePackage)
router.put("/update/:id", authCheck, updatePackage)
router.get("/:id", getSinglePackage)
router.get("/category/:category", getPackagesByCategory);

export default router;