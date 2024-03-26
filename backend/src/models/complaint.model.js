import mongoose, {Schema} from "mongoose";  

const complaintSchema= new Schema({
    username:{
        type: String,
        required: true,
    },
    contact:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required:true,
        enum: ['Leakage', 'Jammed', 'Drain overflow', 'others'],
        default:'Leakage'
    },
    description:{
        type: String,
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
},{timestamps:true});

export const Complaint= mongoose.model("Complaint", complaintSchema)