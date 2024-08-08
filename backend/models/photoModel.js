import mongoose from "mongoose";

const PhotoSchema = mongoose.Schema({
  filename: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
})

const ImageModel = mongoose.model("images", PhotoSchema);

export default ImageModel;