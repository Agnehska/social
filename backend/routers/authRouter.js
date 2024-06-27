import { Router } from 'express';
import authCtrl from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/register', authCtrl.register);

authRouter.post('/login', authCtrl.login);

authRouter.post('/logout', authCtrl.logout);

authRouter.post('/refresh_token', authCtrl.generateAccessToken);

export default authRouter;