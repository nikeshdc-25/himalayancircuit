import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import Blogs from "../models/blogModel.js";

const addBlogs = asyncHandler(async (req,res)=>{
    let blog = await Blogs.create({
        user: req.user._id,
        title:"Sample Title",
        description:"Sample Description",
        image: "/images/sample.jpg",
        category: "Nepal"
      }); 
    res.send({ message: `Blog added successfully!`, blog });  
})

export {addBlogs}