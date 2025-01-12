import express from "express";
import { addOrUpdateAboutUsContent, getAboutUsContent } from "../controller/aboutusContentController.js";


const router = express.Router();

router
  .route("/")
  .get(getAboutUsContent) 
  .post(addOrUpdateAboutUsContent);

export default router;
