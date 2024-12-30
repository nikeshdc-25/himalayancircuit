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

const updateBlogs =  asyncHandler(async (req, res) =>{
    let id = req.params.id;
    let blog = await Blogs.findById(id);
    if (!blog) {
      throw new ApiError(404, "Post not found!");
    }
    blog.description = req.body.description || blog.description;
    blog.image = req.body.image || blog.image;
    blog.title = req.body.title || blog.title;
    blog.category = req.body.category || blog.category;
    let updateBlog = await blog.save();
  
    res.send({
      message: " Blog Post updated successfully!",
      blog: updateBlog,
    });
  });

  const deleteBlog = asyncHandler(async (req, res) => {
    let id = req.params.id;
    let blog = await Blogs.findById(id);
    if (blog) {
      await Blogs.findByIdAndDelete(id);
      res.send({ message: "Blog post removed" });
    } else {
      throw new ApiError(404, "Blog post not found");
    }
  }); 

  const getBlogs = asyncHandler(async (req, res) => {
    let getblog = await Blogs.find({});
    res.send(getblog);
  });

export {addBlogs, updateBlogs, deleteBlog, getBlogs}