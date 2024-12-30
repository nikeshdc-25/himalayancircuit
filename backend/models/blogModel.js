import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        category:{
            type: String,
            required: true,
            enum: ["Accomodation","Wildlife","Adventure","Hiking","Tour","Trekking","Cultural Tour","Nature","Nepal"]
        },
        image:{
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        tags:[{
            type:String,
            required:true,
        }],
    },
    {timestamps: true}
)

const Blogs = mongoose.model("Blogs", blogSchema);
export default Blogs;