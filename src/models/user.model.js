import mongoose, {Schema} from "mongoose";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new Schema ({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        index:true
    },
    avatar:{
        type: String, //clodinary url
        required: true,
        
    },

    coverImage:{
        type:String,
    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref:"Video",
        },
      
    ],
    password: {
        type:String,
        required:[true, "Password is required"],
        },

        refreshToken: {
            type:String,
        }
    
}, 
{timestamps: true}

);


userSchema.pre("save", async function (next)  {
    if(!this.isModified("password") || this.isNew){
        this.password = await bcrypt.hash(this.password,10)
    }
    next();
})

userSchema.methods.isPasswordMatch = async function (password){
    return await bcrypt.compare(password, this.password);
}


userSchema.methods.generateAccessToken = function (){
    return jwt.sign(
        {
        userId: this._id, 
        email: this.email,
        fullname: this.fullname,
        username: this.username
    },  
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES

    } 
    )
        
    }

    userSchema.methods.generateRefreshToken = function (){
        return jwt.sign(
            {
            userId: this._id, 
            email: this.email,
            fullname: this.fullname,
            username: this.username
        },  
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRES

        } 
        )
            
        }



    //sign method to generate refresh token
export const User = mongoose.model("User", userSchema);
