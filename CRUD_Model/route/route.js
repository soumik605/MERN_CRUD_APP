import express from 'express'
import { getUsers,addUser, getUserById, editUser, deleteUser } from '../controller/user-controllers.js';

const router = express.Router();

router.get('/',getUsers)
router.post('/adduser',addUser)
router.get('/:id',getUserById)
router.put('/:id',editUser)
router.delete('/:id',deleteUser)

export default router;