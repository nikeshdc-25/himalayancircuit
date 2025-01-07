import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, 
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const NewsLetter = mongoose.model("NewsLetter", newsletterSchema);
export default NewsLetter;
