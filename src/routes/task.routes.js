import { Router } from 'express';
import { 
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from "../controllers/task.controllers.js";

const router =  Router();

router.get('/tasks', getTasks);

router.post('/tasks', createTask);

router.patch('/tasks', updateTask);

router.delete('/tasks', deleteTask);

export default router;