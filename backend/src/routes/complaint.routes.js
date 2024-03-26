import { Router } from "express";
import { allComplaints, deleteComplaint, getComplaint, newComplaint, updateComplaint } from "../controllers/complaint.controller.js";

const router= Router();

router.post('/new-complaint', newComplaint);
router.get('/complaints', allComplaints);
router.patch('/:id/update', updateComplaint);
router.delete('/:id/delete', deleteComplaint);

export default router;