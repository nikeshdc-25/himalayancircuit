import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from "../models/userModel.js";
import ApiError from '../utils/apiError.js';

const authCheck = asyncHandler (async(req, res, next)=>{
    let token = req.cookies.jwt;
    if(!token){
        throw new ApiError(401, "You must be logged in!")
    }
    try{
        let {userID} = jwt.verify(token, process.env.JWT_SECRET);
        let user = await User.findById(userID);
        req.user = {
            _id: user._id,
            username: user.username,
            email: user.email,
            isSuperUser: user.isSuperUser,
            isBlogUser: user.isBlogUser,
            isTnTUser: user.isTnTUser,
        };
        next();
    }
    catch(e){
        throw new ApiError(401, "Invalid Token")
    }
}) 

const checkAdmin = asyncHandler(async(req, res, next)=>{
    let isSuperUser = req.user?.isSuperUser;
    if(isSuperUser) next();
    else{
        throw new ApiError(403, "You are not authorized to perform this operation!")    //Forbidden Error!
    }
});

export {authCheck, checkAdmin};