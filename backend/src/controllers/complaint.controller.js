import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Complaint from "../models/complaint.model.js";

//Post New complaint

const newComplaint= asyncHandler(async(req, res)=>{
    const complaint = new Complaint({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        status: req.body.status
      });
    
      try {
        const newComplaint = await complaint.save();
       
        return res.status(201).json(
            new ApiResponse(201, "Complaint registered successfully", newComplaint)
        )
      } catch (err) {
        throw new ApiError(500, "complaint was not registered. Try again")
      }
})

// update complaint

const updateComplaint= asyncHandler(getComplaint,async(req,res)=>{
    if (req.body.title != null) {
        res.complaint.title = req.body.title;
      }
      if (req.body.description != null) {
        res.complaint.description = req.body.description;
      }
      if (req.body.category != null) {
        res.complaint.category = req.body.category;
      }
      if (req.body.status != null) {
        res.complaint.status = req.body.status;
      }
      try {
        const updatedComplaint = await res.complaint.save();
        return res.status(201).json(
        new ApiResponse(201, "Complaint was updated successfully", updatedComplaint)
        )
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
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