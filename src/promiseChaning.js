import mongoose from "mongoose";
import Task from "../modal/TaskModel.js";


Task.findByIdAndDelete("64fbed603347739cabd18371")
  .then((task) => {
    if (!task) {
      console.log("Document not found.");
    } else {
      console.log("Deleted Task:", task);
    }
  })
  .catch((e) => {
    console.log("Error:", e);
  });
