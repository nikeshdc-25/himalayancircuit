import express from "express";
import { authCheck, checkAdmin } from "../middleware/authMiddleware.js"
import { getSubscribedEmail, subscribeEmail } from "../controller/newsLetterController.js";

const router = express.Router();
router.post("/", subscribeEmail);
router.get("/", authCheck, checkAdmin, getSubscribedEmail);

export default router;