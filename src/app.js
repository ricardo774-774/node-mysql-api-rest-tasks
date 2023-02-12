import express from "express";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', taskRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not Found =('
    })
})

export default app;