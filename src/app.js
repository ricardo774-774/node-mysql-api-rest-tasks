import express from "express";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found =('
    })
})

export default app;