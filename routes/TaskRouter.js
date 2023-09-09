import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  getSingleTask,
  updateTask,
} from "../controller/TaskController.js";

const router = express.Router();

//Creating a task
router.post("/", createTask);

//Reading a task
router.get("/", getAllTask);

//Reading a specific task
router.get("/:id", getSingleTask);

// updating a specific task
router.patch("/:id", updateTask);

//deleting a specific task
router.delete("/:id", deleteTask);

export default router;
