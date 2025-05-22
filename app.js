const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Jenkins Node.js Pipeline!');
});

module.exports = app;
