import express from 'express';
import { getBooks } from './../controller/search';

const router = express.Router();

router.get('/', getBooks);

export default router;
