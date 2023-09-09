import Task from "../modal/TaskModel.js";

export const createTask = async (req, res) => {
  const taskName = req.body.taskName;
  try {
    const taskExist = await Task.findOne({ taskName });
    console.log(taskExist);
    if (taskExist) {
      res.status(400).send({ error: "Task already exist" });
    }

    const newTask = await Task.create(req.body);
    console.log(newTask);
    res.status(201).send({
      message: "Task created",
      newTask,
    });
  } catch {
    (e) => {
      res.status(400).send(e);
    };
  }
};

export const getAllTask = async (req, res) => {
  try {
    const task = await Task.find();
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.status(201).send(task);
  } catch {
    (e) => {
      console.error("Error:", e);
      res.status(500).send("Internal Server Error");
    };
  }
};

export const getSingleTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.status(200).send(task);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("Internal Server Error");
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        taskName: req.body?.taskName,
        description: req.body?.description,
        completed: req.body?.completed,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).send({ error: "Task not found" });
    }

    res.status(200).send(updatedTask);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTask = await Task.findByIdAndDelete(id);

    if (!deleteTask) {
      return res.status(404).send({ error: "Task not found" });
    }

    console.log("Deleted Task:", deleteTask);

    res.send({ deleteTask });
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
