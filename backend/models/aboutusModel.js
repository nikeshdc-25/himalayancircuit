import mongoose from "mongoose";

const aboutusSchema = new mongoose.Schema(
{
    username: {
        type: String,
        required: true,
        minLength: 3,
      },
      post: {
        type: String,
        required: true,
      },
      teamrank: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true,
      },
    image: String,
}
)

const AboutUs = mongoose.model("AboutUs", aboutusSchema);
export default AboutUs;