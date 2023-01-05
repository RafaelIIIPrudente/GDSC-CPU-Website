import express from 'express';
import { getUsers } from '../controllers/users';
import { getUserById } from '../controllers/users';
import { createUser } from '../controllers/users';
import { updateUser } from '../controllers/users';
import { deleteUser } from '../controllers/users';
import { verifyUser, adminOnly } from '../middleware/authUser';

const router = express.Router();

//routes 
router.get('/users',verifyUser, adminOnly, getUsers);
router.get('/users/:id',verifyUser, adminOnly, getUserById);
router.post('/users', verifyUser, adminOnly,createUser);
router.patch('/users/:id',verifyUser, adminOnly, updateUser);
router.delete('/users/:id',verifyUser, adminOnly, deleteUser);

export default router;