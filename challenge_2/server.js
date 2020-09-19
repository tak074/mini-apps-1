const express = require('express');
const App = express();
const port = 2020;
const Path = require('path');
const bodyParser = require('body-parser');

App.use(express.static(Path.join(__dirname,'client')));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));

App.post('/', (req, res) => {
  console.log(req.body);
  // req.on('data', (chunk) => {
  //   console.log(chunk.toString());
  //   console.log('chunk2');
  //   console.log(chunk);
  // });

  res.status(200);
  res.send('hola');
})

App.listen(port,() => {
  console.log(`listening to localhost:${port}`);
})