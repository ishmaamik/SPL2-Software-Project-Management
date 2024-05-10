import express from 'express';
import { userSignUp, studentSignUp, studentLogin, supervisorSignUp, supervisorLogin } from '../controller/userController.js';
const router= express.Router(); //router is assigned the Router function of express

router.post('/signup', userSignUp);
router.post('/studentsignup', studentSignUp);
router.post('/supervisorsignup', supervisorSignUp);
router.post('/studentlogin', studentLogin);
router.post('/supervisorlogin', supervisorLogin);


export default router;