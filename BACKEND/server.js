// backend/server.js
const express = require('express');
const app = express();
const tasksRouter = require('./routes/tasks');

// Set up middleware and configure your Express server

// Use the tasks routes
app.use('/api', tasksRouter);

// Start your server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
