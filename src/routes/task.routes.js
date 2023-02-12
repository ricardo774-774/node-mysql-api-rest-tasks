import { Router } from 'express';
import { 
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask
} from "../controllers/task.controllers.js";

const router =  Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.patch('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

export default router;