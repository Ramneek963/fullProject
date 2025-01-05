const express = require('express');
const os = require('os')
const cors = require("cors");
const data = require('./MOCK_DATA.json')
const fs = require('fs')
console.log(os.cpus().length)
const app = express();
const port = 8000;
app.use(cors()); // Enables CORS for all routes
app.get('/api/data', (req, res) => {
  res.send(data)
});
app.get('/api/data/:id', (req, res) => {
  const getID = Number(req.params.id)
  const filteredData = data.find((e) => e.id === getID);
  res.send(filteredData)
});
app.get('/test', (req, res) => {
    const log = `data \n`
    fs.appendFile('log.txt', log, (err ,data) => {
    res.send('Hello World!');
    })
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});