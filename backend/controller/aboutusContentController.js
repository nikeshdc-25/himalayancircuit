import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import AboutUsContent from "../models/aboutusContentModel.js";

const addOrUpdateAboutUsContent = asyncHandler(async (req, res) => {
  const { content } = req.body;

  let aboutUsContent = await AboutUsContent.findOne({});
  if (aboutUsContent) {
    aboutUsContent.content = content || aboutUsContent.content;
    await aboutUsContent.save();
    res.send({
      message: "About Us content updated successfully!",
      aboutUsContent,
    });
  } else {
    aboutUsContent = await AboutUsContent.create({ content });
    res.send({
      message: "About Us content added successfully!",
      aboutUsContent,
    });
  }
});

const getAboutUsContent = asyncHandler(async (req, res) => {
  const aboutUsContent = await AboutUsContent.findOne({});
  if (!aboutUsContent) {
    throw new ApiError(404, "About Us content not found");
  }
  res.send(aboutUsContent);
});

export { addOrUpdateAboutUsContent, getAboutUsContent };
