import express from "express";
import {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controller/UserController.js";

const router = express.Router();

//Creating a user
router.post("/", createUser);

//Reading a user
router.get("/", getAllUser);

//Reading a specific user
router.get("/:id", getSingleUser);

// updating a specific user
router.patch("/:id", updateUser);

//Deleting a specific user
router.delete("/:id", deleteUser);

export default router;
