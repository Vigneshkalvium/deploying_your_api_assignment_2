const express = require('express');
const { resolve } = require('path');
const config = require('./config');

const app = express();
const port = config.port || 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  if (config.isAdmin) {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});