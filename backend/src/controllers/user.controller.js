import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return { accessToken, refreshToken };
    }
    catch (error) {
        throw new ApiError(500, "Token generation failed");
    }
}

const registerUser= asyncHandler(async (req,res)=>{
    
    const { email, username, aadhar , password }= req.body;
    console.log(email, username, password, aadhar);

    if (
        [ email, username,aadhar, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "Please fill in all fields");
    }

    const existedUser= await User.findOne({
        $or: [{email}, {username}]
    })

    console.log(existedUser);
    if(existedUser){
        throw new ApiError(409, "User already exists");
    }

    const user= await User.create({
        email,
        username,
        aadhar,
        password,
    });

    const createdUser= await User.findById(user._id).select(" -password -refreshToken")

    if (!createdUser) {
        throw new ApiError(500, "User creation failed");
    }

    return res.status(201).json(
        new ApiResponse(201, "User created successfully", createdUser)
    )


})

const loginUser = asyncHandler(async (req, res) => {
    //get data from front-end (req -> body)
    // username or email
    //validation (not empty)
    //check if user exists(find user)
    //check if password is correct
    //generate token
    //send cookie
    //send response

    const { email, username, password } = req.body;

    if (!(email || username)) {
        throw new ApiError(400, "Username or email is required");
    }

    if (!password) {
        throw new ApiError(400, "Password is required");
    }

    const user = await User.findOne({
        $or: [{ email, username }]
    })

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid password");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).
    select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {
                user: loggedInUser,
                accessToken,
                refreshToken
            },
                "User Logged in Succesfully"
            )
        )

})

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }
    
    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {

    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401, "Unauthorized request")
    }

   try {
    const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
 
    const user = await User.findById(decodedToken?._id)
    if(!user){
     throw new ApiError(401, "Invalid refresh token")
     }
 
     if(incomingRefreshToken !== user?.refreshToken ){
         throw new ApiError("401", "refresh token expired or used")
     }
 
     const options={
         httpOnly:true,
         secure:true
     }
 
    const { accessToken, newrefreshToken } = await generateAccessAndRefreshToken(user._id)
    
     return res
     .status(200)
     .cookie("accessToken",accessToken, options)
     .cookie("refreshToken",newrefreshToken, options )
     .json(
         new ApiResponse(
             200,
             { accessToken, newrefreshToken},
             "Access token refreshed"
             )
     )
   } catch (error) {
     throw new ApiError(401, error?.message || "invlaid token" )
   }
})

const changeCurrentPassword= asyncHandler(async(req,res)=>{
    const { oldPassword, newPassword, confirmPassword }=req.body;

    const user= await User.findById(req.user?._id)
    const isPasswordCorrect= await user.isPasswordCorrect(oldPassword);
    if(!isPasswordCorrect){
        throw new ApiError(401, "Invalid Password")
       }
    
       user.password= newPassword
       await user.save({validateBeforeSave: false})
    
       if(!(confirmPassword === newPassword)){
        throw new ApiError(401, "Password does not match")
       }
    
       return res
       .status(200)
       .json( new ApiResponse(200,{},"Password changed succesfully"))
    
})

const  getCurrentUser=asyncHandler(async(req,res)=>{
    return res
    .status(200)
    .json(new ApiResponse
        (200, req.user , "current user fetched succesfully"))
})


export { registerUser, loginUser, logoutUser, refreshAccessToken, getCurrentUser, changeCurrentPassword};