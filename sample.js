const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile('login.html');
});


app.post('/login', (req, res) => {
  const { name, password } = req.body;
  res.send('Login successful');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});