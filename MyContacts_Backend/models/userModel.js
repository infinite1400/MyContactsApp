import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username : {
        type : String,
        require : [true,"Please add the username"]
    },
    email : {
        type : String,
        require : [true , "Please add the email address"],
        unique : [true, "Email address already taken"]
    },
    password : {
        type : String,
        require: [true , "Please add the user password"],
    }
},{
    timestamps : true
})

const User=new mongoose.model("User",userSchema);
export default User;