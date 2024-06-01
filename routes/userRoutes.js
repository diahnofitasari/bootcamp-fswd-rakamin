import express from 'express';
import multer from 'multer';
import path from 'path';
import userController from '../controllers/userController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Menggunakan timestamp untuk nama file
  }
});

const upload = multer({ storage: storage });

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', upload.single('photo_profile'), userController.createUser);
router.patch('/users/:id', upload.single('photo_profile'), userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export default router;
