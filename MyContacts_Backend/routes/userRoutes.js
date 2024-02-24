import express from 'express';
import { registerUser,loginUser,currentUser } from '../controllers/userController.js';
import validateToken from '../middleware/validateTokenHandler.js';
const userRoutes=express.Router();
userRoutes.post("/register",registerUser)

userRoutes.post("/login",loginUser)

userRoutes.get("/current",validateToken,currentUser)

export default userRoutes;