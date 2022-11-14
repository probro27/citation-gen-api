import express from 'express';
import citationRoutes from './citation';
const router = express.Router();

router.use('/citation', citationRoutes);

export default router;
