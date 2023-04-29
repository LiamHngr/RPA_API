const csv = require('csv-parser');
const fs = require('fs');
const express = require('express');
const app = express();

const strings = [];

fs.createReadStream('string.csv')
  .pipe(csv())
  .on('data', (row) => {
    //console.log(row);
    strings.push(row.Information);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

app.get('/', (req, res) => {
  //console.log('hello world');
  const randomString = strings[Math.floor(Math.random() * strings.length)];
  //console.log(strings);
  //console.log(strings.length);
  res.json({ string: randomString });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});