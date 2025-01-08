import express from "express";
import multer from "multer";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    let fn = Date.now() + "-" + file.originalname;
    cb(null, fn);
  },
});

const fileFilter = (req, file, cb) => {
  let imagePattern = /\.(jpg|jpeg|png|webp)$/;
  let isMatch = file.originalname.match(imagePattern);
  if (isMatch) cb(null, true);
  else cb(new ApiError("Only Image Files Allowed"), false);
};

const upload = multer({
  storage,
  fileFilter,
});

router.post(
  "/upload",
  upload.array("images", 10), // allow up to 10 images
  asyncHandler(async (req, res) => {
    const imagePaths = req.files.map((file) => `/${file.path}`);

    res.send({
      message: "Images Uploaded Successfully",
      paths: imagePaths,
    });
  })
);

export default router;
