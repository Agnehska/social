import jwt from 'jsonwebtoken';
import obj from '../config.js'
import UserModel from '../models/userModel.js';

const middleAuth = async function (req, res, next){
  if (req.method === 'OPTIONS'){
    next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token){
      return res.status(403).json({message: 'Пользователь не авторизован'})
    }
    // console.log(jwt.verify(token, process.env.ACCESSTOKENSECRET, {expiresIn: "1d"}).email)
    const decodedData = jwt.verify(token, process.env.ACCESSTOKENSECRET, {expiresIn: "1d"})
    const id = decodedData.id
    const info = await UserModel.findById(id).exec();

    req.user = info

    next()
  } catch (e) {
    console.log(e)
    return res.status(403).json({message: 'Пользователь не авторизован'})
  }
}

export default middleAuth;