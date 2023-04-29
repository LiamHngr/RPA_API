const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const csv = require('csv-parser');
const fs = require('fs');



const strings = [];
const BPstrings = [];
const UiPathstrings = [];

fs.createReadStream('Data/RPAstring.csv')
  .pipe(csv())
  .on('data', (row) => {
    //console.log(row);
    strings.push(row.Information);
  })
  .on('end', () => {
    console.log('General file successfully processed');
  });

  fs.createReadStream('Data/BPstring.csv')
  .pipe(csv())
  .on('data', (row) => {
    //console.log(row);
    BPstrings.push(row.Information);
  })
  .on('end', () => {
    console.log('BP file successfully processed');
  });

  fs.createReadStream('Data/RPAstring.csv')
  .pipe(csv())
  .on('data', (row) => {
    //console.log(row);
    UiPathstrings.push(row.Information);
  })
  .on('end', () => {
    console.log('UiPath file successfully processed');
  });



app.get('/', (req, res) => {
  res.send('Try my General RPA tips <a href="/general">API</a><br>Try my BluePrism RPA tips <a href="/BPTips">API</a><br>Try my UiPath RPA tips <a href="/UiPathTips">API</a>');
});

app.get('/general', (req, res) => {
  const randomString = strings[Math.floor(Math.random() * strings.length)];
  res.json({ string: randomString });
});

app.get('/BPTips', (req, res) => {
  const randomString = BPstrings[Math.floor(Math.random() * BPstrings.length)];
  res.json({ string: randomString });
});

app.get('/UiPathTips', (req, res) => {
  const randomString = UiPathstrings[Math.floor(Math.random() * UiPathstrings.length)];
  res.json({ string: randomString });
});



app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});