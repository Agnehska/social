import { Router } from 'express';
import authCtrl from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/register', authCtrl.register);

authRouter.post('/login', authCtrl.login);

authRouter.post('/logout', authCtrl.logout);

authRouter.post('/refresh_token', authCtrl.generateAccessToken);

authRouter.post('/upload', authCtrl.upload);

authRouter.get('/images', authCtrl.images);

authRouter.post('/video', authCtrl.uploadVideo);

authRouter.get('/video', authCtrl.videos);

export default authRouter;