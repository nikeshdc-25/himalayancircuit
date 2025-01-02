import asyncHandler from "../middleware/asyncHandler.js";
import NewsLetter from "../models/newsletterModel.js";
import ApiError from "../utils/apiError.js";
import { isEmail } from "../utils/validator.js";

const subscribeEmail = asyncHandler(async (req, res) => {
  let { email } = req.body;
  let emailExists = await NewsLetter.findOne({ email });
  if (!isEmail(email)) {
    throw new ApiError(404, "Invalid Email!");
  }
  if (emailExists) {
    let err = new Error(` Email: ${email} is already subscribed!`);
    err.status = 400; //400 for bad requests
    throw err;
  }
  await NewsLetter.create({ email });
  res.send({ message: `Thank you for subscribing. You will be notified in ${email} !` });
});

const getSubscribedEmail = asyncHandler(async (req, res) => {
  let emails = await NewsLetter.find({}).select("email");
  res.send(emails);
});

export { subscribeEmail, getSubscribedEmail };
