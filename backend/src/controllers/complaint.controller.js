import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Complaint } from "../models/complaint.model.js";

//Post New complaint

const newComplaint= asyncHandler(async(req, res)=>{
    const complaint = new Complaint({
        username: req.body.username,
        contact: req.body.contact,
        address: req.body.address,
        category: req.body.category,
        description: req.body.description
      });

      try {
        const newComplaint = await complaint.save();
       
        return res.status(201).json(
            new ApiResponse(201, "Complaint registered successfully", newComplaint)
        )
      } catch (err) {
        res.status(400).json({ message: err.message });
        
      }
})

// update complaint

const updateComplaint= asyncHandler(async(req,res)=>{
   
  const { username,contact,address, category, description }= req.body;

    if(!(username || contact || address || category)){
        throw new ApiError(400,"All fields are required");
    }

  const complaint = await Complaint.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                username,
                contact,
                address,
                category,
                description
            }
        },
        {new: true}
        
        )

        return res
        .status(200)
        .json(new ApiResponse(200, complaint, "Complaint details updated"))    

    });
    
// delete complaint

const deleteComplaint= asyncHandler(getComplaint,async(req,res)=>{
    try {
        await res.complaint.remove();
        res.json({ message: 'Complaint deleted' });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})

// get complaint

const allComplaints=asyncHandler(async(req, res)=>{
    try {
        const complaints = await Complaint.find();
        return res.status(201).json(
            new ApiResponse(201, "all complaints", complaints)
        )
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})

async function getComplaint(req, res, next) {
    let complaint;
    try {
      complaint = await Complaint.findById(req.params.id);
      if (complaint == null) {
        return res.status(404).json({ message: 'Cannot find complaint' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.complaint = complaint;
    next();
  }

export { newComplaint, updateComplaint, allComplaints, deleteComplaint, getComplaint };