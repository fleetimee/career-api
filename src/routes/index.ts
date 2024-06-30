import express from 'express';

import auth from './auth/api';

const router = express.Router();

router.use('/', auth);

export default router;
