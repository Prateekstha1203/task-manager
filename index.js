import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/Mongodb.js";
import taskRouter from "./routes/TaskRouter.js";
import userRouter from "./routes/UserRouter.js";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
dotenv.config();
dbConnect();

app.use("/task", taskRouter);
app.use("/user", userRouter);

//Running server on port 3000
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

//Deleting a specific task
// app.delete("/task/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteTask = await Task.findByIdAndDelete(id);
//     console.log(remainingTask);
//     const inCompleteCount = await Task.countDocuments({
//       complete: false,
//     });
//     res.send({ deleteTask, inCompleteCount });
//   } catch (e) {
//     throw new Error("error");
//   }
// });
