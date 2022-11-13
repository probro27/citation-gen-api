import { Router as router } from 'express';
import apiRoutes from './api';

router.use('/api', apiRoutes);

module.exports = router;
