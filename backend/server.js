import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.routes.js";
import { connectDB } from "./config/db.js";


const app = express();

connectDB();

app.use(cors({
  origin:"https://cognocore-todo.vercel.app/",
  credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", taskRoutes);

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
})