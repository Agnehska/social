import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 25,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    likes: {
      type: Number,
      default: 0
    },
    user: { type: mongoose.Types.ObjectId, ref: "user" }
  }
);

const PostModel = mongoose.model("post", PostSchema);

export default PostModel;