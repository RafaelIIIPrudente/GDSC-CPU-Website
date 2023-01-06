import express from 'express';
import { getEvents } from '../controllers/events';
import { getEventsById } from '../controllers/events';
import { createEvents } from '../controllers/events';
import { updateEvents } from '../controllers/events';
import { deleteEvents } from '../controllers/events';
import { verifyUser} from '../middleware/authUser';

const router = express.Router();

//routes 
router.get('/events',verifyUser, getEvents);
router.get('/event-page',verifyUser, getEvents);

router.get('/events/:id', verifyUser, getEventsById);
router.post('/events', verifyUser, createEvents);
router.patch('/events/:id', verifyUser, updateEvents);
router.delete('/events/:id', verifyUser, deleteEvents);

export default router;