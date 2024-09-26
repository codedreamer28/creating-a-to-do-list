//dependancies to be used
const express = require ('express');
const bodyParser = require ('body-parser');

//initialize the server
const server = express();

server.use(bodyParser.json());
let tasks = []; //storage for tasks as array

//GET endpoints to fetch tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

//POST enpoints to create a new task
app.post("/tasks", (req, res) => {
  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: req.body.completed || false,
  };
  tasks.push(task);
  res.status(201).json(task);
});

//PUT endpoint to update existing task with specified id
app.put("/tasks/:id" , (req, res)=> {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if(!task){
    return res.status(404).json({error : "Task not found"});
  }
  task.title = req.body.title || task.title;
  task.completed = req.body.completed || task.completed;
  res.json(task);
});

//DELETE endpoint to remove an existing task with specific id
app.delete("/tasks/:id" , (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1){
    return res.status(404).json({error: "Task not found"});
  }
  tasks.splice(index,1);
  res.status(204).send();
});

//run the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});