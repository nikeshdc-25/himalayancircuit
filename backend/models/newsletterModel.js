import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const NewsLetter = mongoose.model("NewsLetter", newsletterSchema);
export default NewsLetter;
