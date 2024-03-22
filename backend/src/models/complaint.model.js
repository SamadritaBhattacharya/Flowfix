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

export const Complaint= mongoose.model("User", complaintSchema)