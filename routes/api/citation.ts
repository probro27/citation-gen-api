import express from 'express';

const router = express.Router();

router.get('/article', () => console.log('hello world!'));

export default router;
