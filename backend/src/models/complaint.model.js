import mongoose, {Schema} from "mongoose";  

const complaintSchema= new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required:true
    },
    complaintImage:{
        type: String
    },
    status:{
        type: String,
        enum: ['Pending', 'In Progress', 'Resolved'],
        default:'Pending'
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
},{timestamps:true});

export const Complaint= mongoose.model("Complaint", complaintSchema)