import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import AboutUs from "../models/aboutusModel.js";

const addAboutUs = asyncHandler(async (req, res) => {
    let aboutus = await AboutUs.create({
      username: "Sample Name",
      description: "Sample Description",
      image: "/images/sample.jpg",
      post: "Staff",
      teamrank: 25,
    });
    res.send({ message: `New member added successfully!`, aboutus });
  });


  const updateAboutus = asyncHandler(async (req, res) => {
    let id = req.params.id;
    let aboutus = await AboutUs.findById(id);
    if (!aboutus) {
      throw new ApiError(404, "Member Not Found!");
    }
    aboutus.username = req.body.username || aboutus.username;
    aboutus.description = req.body.description || product.description;
    aboutus.image = req.body.image || aboutus.image;
    aboutus.teamrank = req.body.teamrank || aboutus.teamrank;
    aboutus.post = req.body.post || aboutus.post;
    let updateAboutus = await aboutus.save();
  
    res.send({
      message: "New member updated successfully!",
      aboutus: updateAboutus,
    });
  });

  const deleteAboutUs = asyncHandler(async (req, res) => {
    let id = req.params.id;
    let aboutus = await AboutUs.findById(id);
    if (aboutus) {
      await AboutUs.findByIdAndDelete(id);
      res.send({ message: "Member removed" });
    } else {
      throw new ApiError(404, "Member not found");
    }
  });

  const getAboutUs = asyncHandler(async (req, res) => {
    let aboutus = await AboutUs.find({});
    res.send(aboutus);
  });

  export {addAboutUs, updateAboutus, deleteAboutUs, getAboutUs}