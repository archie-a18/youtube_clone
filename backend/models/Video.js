import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, 
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true, 
    },
    description: {
      type: String,
      required: true,
      maxLength: 500, 
    },
    imgUrl: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return /^(https?|ftp):\/\/.*(jpeg|jpg|png|gif|bmp)$/.test(value);
        },
        message: "Invalid imgUrl format",
      },
    },
    videoUrl: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return /^(https?|ftp):\/\/.*(mp4|avi|mkv|mov)$/.test(value);
        },
        message: "Invalid videoUrl format",
      },
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

VideoSchema.index({ userId: 1, title: 1 }, { unique: true });

export default mongoose.model("Video", VideoSchema);
