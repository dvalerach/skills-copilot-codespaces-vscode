// Create web server
// Create a route for comments
// Respond with a JSON object containing the comments array
// Start the server on port 3000

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000);

const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'FishBoi', comment: 'I am a fish!' },
  { username: 'SkaterBoi', comment: 'I love to skate!' },
];