const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/random', (req, res) => {
  const randomStrings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const randomIndex = Math.floor(Math.random() * randomStrings.length);
  const randomString = randomStrings[randomIndex];
  res.send(randomString);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});