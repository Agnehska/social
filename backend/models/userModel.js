import mongoose from "mongoose";

const UserSchema= mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    maxlength: 25,
    required: true
  },
  fullname: {
    type: String,
    trim: true,
    maxlength: 25,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    default: ''
  },
  gender: {
    type: String,
    default: 'male'
  },
  website: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    default: ''
  },
  story:{
    type: String,
    default: '',
    maxlength: 200,
  },
  friends: [{type: mongoose.Types.ObjectId, ref: 'user'}],
  following: [{type: mongoose.Types.ObjectId, ref: 'user'}]
}, {
  timestamp: true
})

// export default mongoose.model('user', UserSchema)

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;