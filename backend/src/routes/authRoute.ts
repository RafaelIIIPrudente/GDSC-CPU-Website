import express from 'express';
import { Login } from '../controllers/auth';
import { logOut } from '../controllers/auth';
import { Me } from '../controllers/auth';

const router = express.Router();

//routes 
router.post('/login', Login);
router.get('/me', Me);
router.delete('/logout', logOut);

export default router;