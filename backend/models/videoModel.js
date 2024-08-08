import mongoose from "mongoose";

const VideoSchema = mongoose.Schema({
  title:{
    type: String,
    maxlength: 50,
    required: true
  },
  description: {
    type: String,
    default: "",
    maxlength: 200,
    required: true
  },
  filename: {
    type: String,
    required: true,
  },
})

const VideoModel = mongoose.model("video", VideoSchema);

export default VideoModel;