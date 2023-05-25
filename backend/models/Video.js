import mongoose from "mongoose";

const VideoSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    title:{
        type:String, 
        required:true,   
    },
    description:{
        type:String,
        required:true,
    },
    imgUrl:{
        type:String,
        required:true,
    },
    videoUrl:{
        type:String,
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    likes:{
        type:[String],
        default:[],
    },
    dislikes:{
        type:[String],
        default:[],
    },


},{timestamps:true});

export default mongoose.model("Video",VideoSchema);