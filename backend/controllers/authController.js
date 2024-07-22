import UserModel from '../models/userModel.js';
import ImageModel from '../models/photoModel.js';
import VideoModel from '../models/videoModel.js';
import PostModel from '../models/postModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import path from 'path';
import util from 'util';
import __dirname from '../server.js';
import MessageModel from '../models/messageModel.js';


const authCtrl = {
  register: async (req, res) => {
    try {
      const { fullname, username, email, password, gender } = req.body;

      const newUsername = username.toLowerCase().replace(/ /g,'');
      const user_name = await UserModel.findOne({username: newUsername});

      if (user_name) return res.status(400).json({msg: 'this username already exists'})

      const Email = await UserModel.findOne({email: email});
      if (Email) return res.status(400).json({msg: 'this email already exists'})

      if (password.length < 6) return res.status(400).json({msg: 'password is too short. It must be at least 6'})

      const hashPassword = await bcrypt.hash(password, 3);

      const newUser = await new UserModel({
        fullname, username: newUsername, email, password: hashPassword, gender
      })

      const access_token = createAccessToken({id: newUser._id});
      const refresh_token = createRefreshToken({id: newUser._id});

      await newUser.save();

      res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path:"/api/refresh_token",
        maxAge: 24*30*30*60*60*1000
      })
      
      
      res.json({
        msg: "registration success",
        access_token,
        user: {
          ...newUser._doc,
          password: ''
        }
      })
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  },
  login: async (req, res) => {
    try {
      // const {email, password} = req.body;

      // const user = await UserModel.findOne({email})
      // .populate("friends following", "-password")

      // if (!user) return res.status(400).json({msg: 'User does not exist'})

      // const isMatch = await bcrypt.compare(password, user.password)

      // if (!isMatch) return res.status(400).json({msg: 'Password is incorrect'})

      // const access_token = createAccessToken({id: user._id});
      // const refresh_token = createRefreshToken({id: user._id});

      
      
      
      
      const {email, password} = req.body;
      // console.log(req.body)
      const newUser = await UserModel.findOne({email})
      // console.log(newUser)
      if (!newUser){
        return res.status(400).json({message: `Пользователь ${username} не существует`})
      }
      const validPassword = bcrypt.compare(password, newUser.password)
      if (!validPassword){
        return res.status(400).json({message: `Введен неверный пароль`})
      }
      const access_token = createAccessToken({id: newUser._id});
      const refresh_token = createRefreshToken({id: newUser._id});

      res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path:"/api/refresh_token",
        maxAge: 24*30*30*60*60*1000
      })

      res.json({
        msg: "login success",
        access_token,
        user: {
          ...newUser._doc,
          password: ''
        }
      })
   
    } catch (err){
      res.status(500).json({message: err.message})
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie('refreshtoken', {path: "/api/refresh_token"})
      res.json({msg: "Logged out"})
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  },
  generateAccessToken: async (req, res) => {
    try {
      const rf_token =  res.cookie.refreshtoken;
      if (!rf_token) return res.status(400).json({msg: 'Please login now'})

      jwt.verify(rf_token, process.env.REFRESHTOKENSECRET, async(err, result)=>{
        if(err) return res.status(400).json({msg: 'Please login now'})

        const user = await UserModel.findById(result.id).select('-password')
        .populate("friends following")

        if (!user) return res.status(400).json({msg: 'User does not exist'})

        const access_token = createAccessToken({id: result._id});

        res.json({
          access_token
        })
      })
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  },
  upload: async (req, res) => {
    try {
      console.log(req.files.file)
      const file = req.files.file;
      const fileName = file.name;
      const size = file.data.length;
      const extension = path.extname(fileName);
      
      const allowedExtensions = /png|jpeg|jpg|gif/;

      if (!allowedExtensions.test(extension)) throw "Unsurpported extentsion!"
      if (size > 5000000) throw "File must be less than 5MB"

      const md5 = file.md5;

      const URL = '/uploads/' + md5 + extension;

      await util.promisify(file.mv)('./public' + URL);

      const newImage = await new ImageModel({
        filename: URL
      })

      await newImage.save();

      res.json({msg: "File uploaded successfully", file: newImage})
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  },
  images: async (req, res) => {
    try {
      const files = await ImageModel.find()
      console.log(files)
      res.json({msg: "It's ok", files: files})
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  },
  uploadVideo: async (req, res) => {
    try {   
      const {title, description, filename} = req.body;
      const newVideo = await new VideoModel({
        title, description, filename
      })
      await newVideo.save();
      res.json({msg: "File uploaded successfully", file: newVideo})
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  },
  videos: async (req, res) => {
    try {
      const files = await VideoModel.find()
      console.log(files)
      res.json({msg: "It's ok", files: files})
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  },
  uploadPost: async (req, res) => {
    try {
      const {title, description, photo} = req.body;
      const newPost = await new PostModel({
        title, description, photo, user: req.user._id
      })

      await newPost.save();

      res.json({msg: "File uploaded successfully", file: newPost})
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  },
  getPosts: async (req, res) => {
    try {   
      const info = await PostModel.find().populate('user')
      res.json({msg: "It's ok", data: info})
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  },
  uploadMessage: async (req, res) => {
    try {
      const {message} = req.body;
      const newMessage = await new MessageModel({
        message, user: req.user._id
      })

      await newMessage.save();
      const info = await MessageModel.findById(newMessage._id).populate('user')

      res.json({msg: "Message uploaded successfully", file: info})
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  },
  getMessage: async (req, res) => {
    try {   
      const info = await MessageModel.find().populate('user')
      res.json({msg: "It's ok", data: info})
    } catch (err){
      res.status(500).json({msg: err.message})
    }
  }
}

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESSTOKENSECRET, {expiresIn: "1d"})
}

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESHTOKENSECRET, {expiresIn: "30d"})
}

export default authCtrl;