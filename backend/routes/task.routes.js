import express from 'express'

import { createTask, getTasks, deleteTask } from '../controller/task.controller.js'

const router = express.Router();

router.route('/').post(createTask).get(getTasks);
router.route('/:id').delete(deleteTask);

export default router