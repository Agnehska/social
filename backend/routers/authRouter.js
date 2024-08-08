import { Router } from 'express';
import authCtrl from '../controllers/authController.js';
import middleAuth from '../middlewares/authMiddleware.js';

const authRouter = Router();

authRouter.post('/register', authCtrl.register);

authRouter.post('/login', authCtrl.login);

authRouter.get('/logout', authCtrl.logout);

authRouter.post('/refresh_token', authCtrl.generateAccessToken);

authRouter.post('/upload', authCtrl.upload);

authRouter.get('/images', authCtrl.images);

authRouter.post('/video', authCtrl.uploadVideo);

authRouter.get('/video', authCtrl.videos);

authRouter.post('/posts', middleAuth, authCtrl.uploadPost);

authRouter.get('/posts', middleAuth, authCtrl.getPosts);

authRouter.post('/message', middleAuth, authCtrl.uploadMessage);

authRouter.get('/message', middleAuth, authCtrl.getMessage);

export default authRouter;