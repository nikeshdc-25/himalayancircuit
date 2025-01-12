import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import AboutUs from "../models/aboutusModel.js";

const addMember = asyncHandler(async (req, res) => {
  const { username, description, image, post, teamrank } = req.body;

  if (!username || !description || !image || !post || !teamrank) {
    throw new ApiError(400, "All fields are required");
  }

  const aboutus = await AboutUs.create({
    username,
    description,
    image,
    post,
    teamrank,
  });

  res.send({
    message: "New member added successfully!",
    aboutus,
  });
});

const updateMember = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let aboutus = await AboutUs.findById(id);
  if (!aboutus) {
    throw new ApiError(404, "Member Not Found!");
  }
  aboutus.username = req.body.username || aboutus.username;
  aboutus.description = req.body.description || aboutus.description;
  aboutus.image = req.body.image || aboutus.image;
  aboutus.teamrank = req.body.teamrank || aboutus.teamrank;
  aboutus.post = req.body.post || aboutus.post;
  let updateAboutus = await aboutus.save();

  res.send({
    message: "Member updated successfully!",
    aboutus: updateAboutus,
  });
});

const deleteMember = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let aboutus = await AboutUs.findById(id);
  if (aboutus) {
    await AboutUs.findByIdAndDelete(id);
    res.send({ message: "Member removed" });
  } else {
    throw new ApiError(404, "Member not found");
  }
});

const getMember = asyncHandler(async (req, res) => {
  let aboutus = await AboutUs.find({});
  res.send(aboutus);
});

export { addMember, updateMember, deleteMember, getMember };
