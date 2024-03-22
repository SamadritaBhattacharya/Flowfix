import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema= new Schema({
    username:{
        type: String,
        required:true,
        lowercase: true,
        trim: true,
        index:true   
    },
    aadhar:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        required:[true, "Password is required"],
    },
    refreshToken:{
        type: String,
    }
},{
    timestamps:true
});

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password= await bcrypt.hash(this.password, 8);
    }

    next();

})

userSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken=async function(){
    return jwt.sign({ id: this._id,
    email:this.email,
    username: this.username, 
    },  process.env.ACCESS_TOKEN_SECRET,
    {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    });
};

userSchema.methods.generateRefreshToken= async function(){
    return jwt.sign({
        id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET, 
{
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY

}
    )
}


export const User= mongoose.model("User", userSchema);