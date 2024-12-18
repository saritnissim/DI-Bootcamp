const express = require("express")
const fs = require("fs");
const TASK_JSON_FILE = "./tasks.json";

function readTasks() {
  try {
    const data = fs.readFileSync(TASK_JSON_FILE);
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Could not read tasks file", error);
  }
}

function writeTasks(tasks) {
  try {
    // Convert the tasks array into a JSON string
    const data = JSON.stringify(tasks); 
    // Write the JSON string to the file
    fs.writeFileSync(TASK_JSON_FILE, data);
    console.log("Tasks have been updated!");
  } catch (error) {
    console.error("Error writing tasks to file:", error);
  }
}

// Routes
const taskRouter = express.Router();

// GET /tasks: Retrieve a list of all tasks from a JSON file.
taskRouter.get("", (req, res) => {
  try {
    const tasks = readTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
taskRouter.get("/:id", (req, res) => {
  try {
    const taskId = parseInt(req.params.id); // Convert ID to number
    const tasks = readTasks();
    const task = tasks.find((task) => taskId === task.id);
    if (!task) {
      return res.status(404).json({ error: `Task with ID ${taskId} not found` });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /tasks: Create a new task and store it in the JSON file.
taskRouter.post("", (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const tasks = readTasks();
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
  };

  tasks.push(newTask);
  writeTasks(tasks)
  res.status(201).json(newTask);
});

// PUT /tasks/:id: Update a task by ID in the JSON file.
taskRouter.put("/:id", (req, res) => {
  const taskId = parseInt(req.params.id); // Convert ID to number
  const { title, description } = req.body;

  try {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
      return res
        .status(404)
        .json({ error: `Task with ID ${taskId} not found` });
    }
    tasks[taskIndex] = { ...tasks[taskIndex], title, description };
    writeTasks(tasks);
    res.json(tasks[taskIndex]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /tasks/:id: Delete a task by ID from the JSON file.
taskRouter.delete("/:id", (req,res) => {
    try {
      const tasks = readTasks();
      const taskId = parseInt(req.params.id);

      const taskIndex = tasks.findIndex((task) => task.id === taskId);

      if (taskIndex === -1) {
        return res.status(404).json({ error: `Task with ID ${taskId} not found` });
      }

      const deletedTask = tasks.splice(taskIndex, 1);
      writeTasks(tasks);
      res.json(deletedTask[0]);
    } catch (error) {
      console.log("Could not delete", error);
    }
  })


// Export the router
module.exports = taskRouter;