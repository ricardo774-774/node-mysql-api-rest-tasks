import { Router } from 'express';

const router =  Router();

router.get('/users', (req, res) => {
    return res.json({
        message: 'getting users'
    });
} );

router.post('/users', (req, res) => {
    return res.json({
        message: 'creating user'
    });
} );

export default router;