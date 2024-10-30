import express from 'express';

const app = express();

import dogFacts from './dog_facts.js';

app.get('/', (req, res) => {
  res.send('Welcome to the Dog Facts API!');
});

app.get('/facts', (req, res) => {
  const number = parseInt(req.query.number);

  if (number && (isNaN(number) || number < 1 || number > dogFacts.length)) {
    return res.json({
      message: "Invalid number parameter",
      success: false
    });
  }

  const facts = number
  ? getRandomFacts(dogFacts, number)
  : dogFacts;

res.json({
  facts: facts,
  success: true
});
});

function getRandomFacts(factsArray, count) {
if (count === factsArray.length) {
  return factsArray; 
}

// Shuffle the facts array and take the first `count` elements
const shuffledFacts = [...factsArray].sort(() => 0.5 - Math.random());
return shuffledFacts.slice(0, count);
}

app.use((req, res, next) => {
  res.status(404).json({
    message: "Sorry, the page you are looking for does not exist.",
    success: false
  });
});

export default app;