import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim:true,
  },
  completed: {
    type: Boolean,
    default:false,
  },
});

//Export the model
const Task = mongoose.model("Task", taskSchema);
export default Task;
