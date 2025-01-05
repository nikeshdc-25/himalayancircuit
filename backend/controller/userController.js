import User from "../models/userModel.js";
import createToken from "../utils/tokenUtil.js";
import asyncHandler from "../middleware/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import { isEmail, isStrong } from "../utils/validator.js";
// import bcrypt from "bcryptjs";

//@desc register new user
//route /api/v1/user/signup
//@access public
const signup = asyncHandler(async (req, res, next) => {
  let { email, password } = req.body;
  let userExists = await User.findOne({ email }); //{email(from userSchema): useremail(from frontend)}
  if (!isEmail(email)) {
    throw new ApiError(404, "Invalid Email!");
  }
  if (!isStrong(password)) {
    throw new ApiError(
      404,
      "You Wickling, include 1 Uppercase, Symbols and 1 Number in your password!"
    );
  }
  if (userExists) {
    let err = new Error(`User with email ${email} already exists!`);
    err.status = 400; //400 for bad requests
    throw err;
  }
  // let salt = await bcrypt.genSalt(10);
  // let hashedPassword = await bcrypt.hash(password, salt);
  let user = await User.create(req.body);
  res.send({ message: "User registered Successfully!" });
  createToken(res, user._id);
});

//@desc login for existing user
//route /api/v1/user/login
//@access public
const login = asyncHandler(async (req, res, next) => {
  let { email, password, rememberMe } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    let err = new Error(`${email} is not registered!`);
    err.status = 400;
    throw err;
  }

  if (await user.matchPassword(password)) {
    let tokenExpiration = rememberMe ? "30d" : "7d";

    createToken(res, user._id, tokenExpiration);
    res.send({
      message: "Login Successful!",
      user: {
        name: user.username,
        email: user.email,
        isSuperUser: user.isSuperUser,
        isBlogUser: user.isBlogUser,
        isTnTUser: user.isTnTUser
      },
    });
  } else {
    let err = new Error("Invalid Password!");
    err.status = 400;
    throw err;
  }
});

//@desc logout user
//route /api/v1/user/logout
//@access private
const logout = asyncHandler(async (req, res) => {
  res.clearCookie("jwt");
  res.send({ message: "Logout Successfully!" });
});

//@desc get  user
//route /api/v1/user/
//@access private
const getUser = asyncHandler(async (req, res) => {
  let users = await User.find({}).select("-password");
  res.send(users);
});

//@desc gets user details
//route /api/v1/user/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send(req.user);
});

//@desc update user details
//route /api/v1/user/updateprofile
//@access private
const updateProfile = asyncHandler(async (req, res) => {
  let id = req.user._id;
  let user = await User.findById(id);
  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      //If no password is given, no need to be hashed again.
      user.password = req.body.password; //If new password is given, it should be hashed.
    }
    let updatedUser = await user.save();
    res.send({ message: "User Updated Successfully!",
       user: {
        name: updatedUser.username,
        email: updatedUser.email,
        isSuperUser: user.isSuperUser,
        isBlogUser: user.isBlogUser,
        isTnTUser: user.isTnTUser,
    }});
  } else {
    throw new ApiError(404, "User not found!");
  }
});

const updateUser = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let user = await User.findById(id);
  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.isSuperUser = Boolean(req.body.isSuperUser);
    user.isBlogUser = Boolean(req.body.isBlogUser);
    user.isTnTUser = Boolean(req.body.isTnTUser);
    let updatedUser = await user.save();
    res.send({ message: "User Updated", user: updatedUser });
  } else throw new ApiError(404, "User not found!");
});

const deleteUser = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let user = await User.findById(id);
  if (!user) {
    throw new ApiError(404, "User not found!");
  }
  if (user.isSuperUser) {
    throw new ApiError(403, "Cannot delete an admin user!");
  }
  await User.findByIdAndDelete(id);
  res.send({ message: "User deleted Successfully!" });
});

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findById(req.user.id); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export {
  signup,
  login,
  logout,
  getUser,
  getUserProfile,
  updateProfile,
  updateUser,
  deleteUser,
  changePassword,
};
