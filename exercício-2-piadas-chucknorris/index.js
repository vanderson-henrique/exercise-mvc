const express = require('express');

const chuckNorrisRouter = require('./routes/chuckNorrisRouter');

const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(chuckNorrisRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});