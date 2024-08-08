import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  user: { 
    type: mongoose.Types.ObjectId, 
    ref: "user" 
  }
})

const MessageModel = mongoose.model("messages", MessageSchema);

export default MessageModel;