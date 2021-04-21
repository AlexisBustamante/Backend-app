import express from 'express';
import auth from '../controllers/authController';

const router = express.Router();

router.post('/signIn',auth.signIn);

module.exports = router;