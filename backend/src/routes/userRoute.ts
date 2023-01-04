import express from 'express';
import { getUsers } from '../controllers/users';
import { getUserById } from '../controllers/users';
import { createUser } from '../controllers/users';
import { updateUser } from '../controllers/users';
import { deleteUser } from '../controllers/users';
// import { verifyUser, adminOnly } from '../middleware/authUser';

const router = express.Router();

//routes 
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;