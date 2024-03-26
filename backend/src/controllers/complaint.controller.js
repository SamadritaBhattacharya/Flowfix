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
   
    //   try {
    //     const updatedComplaint = await res.complaint.save();
    //     return res.status(201).json(
    //     new ApiResponse(201, "Complaint was updated successfully", updatedComplaint)
    //     )
    //   } catch (err) {
    //     res.status(400).json({ message: err.message });
    //   }

    try {
    
      const complaint = await Complaint.findById(req.complaint._id);
      
      if (!complaint) {
        console.log(complaint);
          return { success: false, message: 'Complaint not found' };
          
      }

      // Update the complaint fields with the new values
      if (req.body.title != null) {
        res.complaint.title = req.body.title;
      }
      if (req.body.description != null) {
        res.complaint.description = req.body.description;
      }
      if (req.body.category != null) {
        res.complaint.category = req.body.category;
      }
      if (req.body.location != null) {
        res.complaint.location = req.body.location;
      }
      if (req.body.status != null) {
        res.complaint.status = req.body.status;
      }

      // Save the updated complaint
      await complaint.save();

      return { success: true, message: 'Complaint updated successfully', updatedComplaint: complaint };
  } catch (error) {
      return { success: false, message: 'An error occurred while updating the complaint', error: error };
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