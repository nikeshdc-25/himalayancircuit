import express from "express";
import { authCheck } from "../middleware/authMiddleware.js";
import { addMember, deleteMember, getMember, updateMember } from "../controller/aboutusController.js";

const router = express.Router();

router.post("/", addMember) 
router.put("/:id", updateMember)
router.delete("/:id", authCheck, deleteMember) 
router.get("/", getMember)

export default router;