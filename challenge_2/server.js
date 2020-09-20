const express = require('express');
const App = express();
const port = 2020;
const Path = require('path');
const fs = require('fs');
const multer = require('multer');
const csv = require('./jsonToCsv');
const upload = multer({
  dest: 'uploads/'
});

App.use(express.static(Path.join(__dirname,'client')));
App.use(express.json());
App.use(express.urlencoded({extended: true}));

App.post('/', upload.single('file'), (req, res) => {

  fs.readFile(req.file.path, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    // data = JSON.parse(data);
    let csvContent  = csv.csvConverter(data);
    res.send(csvContent);
    res.status(200);
  });
})

App.listen(port,() => {
  console.log(`listening to localhost:${port}`);
})


