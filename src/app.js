import express from "express";

const app = express();

app.use(indexRoutes);
app.use(employeesRoutes);

app.listen(3000);

console.log("Running");