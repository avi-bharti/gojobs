import express from 'express';

const router = express.Router();

import { authUser, getUserProfile, logout, registerUser, updateUserProfile } from '../controllers/userController.js';

router.route('/').post(registerUser).get(getUserProfile).put(updateUserProfile);
router.post('/auth', authUser);
router.post('/logout', logout)

export default router;