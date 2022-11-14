import express from 'express';
import { getApaCitationFromArticle } from '../../controller/generateCitation';

const router = express.Router();

router.post('/article', getApaCitationFromArticle);

export default router;
