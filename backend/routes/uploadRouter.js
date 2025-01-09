import express from "express";
import multer from "multer";
import ApiError from "../utils/apiError.js";
import fs from "fs";
import path from "path";

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

// Upload images
router.post(
  "/upload",
  upload.array("images", 10), // allow up to 10 images
  async (req, res) => {
    const imagePaths = req.files.map((file) => `/${file.path}`);
    res.send({
      message: "Images Uploaded Successfully",
      paths: imagePaths,
    });
  }
);

// Delete image route
// "/uploads" is the path of the folder name, not route!!!!!!
router.delete("/delete/uploads/:filename", async (req, res, next) => {
  const { filename } = req.params;
  const filePath = path.join("uploads", filename);

  try {
    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        return next(new ApiError("File not found", 404));
      }
      fs.unlink(filePath, (err) => {
        if (err) {
          return next(new ApiError("Error deleting file", 500));
        }
        res.status(200).json({
          message: "File deleted successfully",
          filename: filename,
        });
      });
    });
  } catch (error) {
    next(error);
  }
});

export default router;
