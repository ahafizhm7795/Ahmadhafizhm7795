// app.js
const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./src/routes/tasks.routes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(morgan('dev'));

// Endpoint utama
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to UTS WSE API - Resource: tasks' });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    app: 'UTS WSE RESTful API',
    author: 'Raffasya Rizki Ramadhan',
    nim: '230104040229',
    resource: 'tasks',
    version: '1.0.0'
  });
});

// Route utama
app.use('/api/tasks', taskRoutes);

// Middleware error global
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
