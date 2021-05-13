const express = require('express');

const routerJokes = require('./routes/jokerRouter');

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(routerJokes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});