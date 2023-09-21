import express from "express";
import { getAllUser, signup, login } from "../controllers/user-controller.js";
import jwtAuth from "../middlewares/jwtMiddleware.js";
const router = express.Router();

router.get('/', jwtAuth, getAllUser);
router.post('/signup', signup);
router.post('/login', login);
export default router;