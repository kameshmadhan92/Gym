const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// Mock admin user
const ADMIN_USER = {
  username: 'admin',
  password: 'admin123', // In real systems, never store plain passwords. Use bcrypt or similar to hash passwords.
};

// Login Route
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
    return res.status(200).send('Login successful');
  } else {
    return res.status(403).send('Invalid username or password');
  }
});

// Admin Dashboard Route (Example)
app.get('/admin/dashboard', (req, res) => {
  res.send('<h1>Welcome to the Admin Dashboard</h1>');
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
