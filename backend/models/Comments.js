import mongoose from "mongoose";

const CommentSchema=new mongoose.Schema({
    des:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    videoId:{
        type:String,
        required:true,
    }

},{timestamps:true});

export default mongoose.model("Comment",CommentSchema);