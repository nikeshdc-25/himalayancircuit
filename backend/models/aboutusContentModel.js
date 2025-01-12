import mongoose from "mongoose";

const aboutUsContentSchema = mongoose.Schema(
  {
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const AboutUsContent = mongoose.model("AboutUsContent", aboutUsContentSchema);

export default AboutUsContent;
