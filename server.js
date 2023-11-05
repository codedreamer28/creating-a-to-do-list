// backend/server.js
const express = require('express');
const app = express();
const tasksRouter = require('./BACKEND/routes/tasks');
const port = process.env.PORT || 3000;


//define the array for tasks
const tasks = [];

//route to list tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});
//serve static files


// Use the tasks routes
app.use('/api', tasksRouter);

// Start your server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
