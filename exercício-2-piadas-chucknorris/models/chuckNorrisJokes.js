const axios = require('axios');

const endPointCategories = 'https://api.chucknorris.io/jokes/categories';
const endPointJoke = 'https://api.chucknorris.io/jokes/random';

const getCategories = () =>
  axios.get(endPointCategories)
    .then((categories) => categories.data)
    .catch((e) => console.log(e.message));

const getJoke = () =>
  axios.get(endPointJoke)
    .then(({ data }) => data.value)
    .catch((e) => console.log(e.message));

const getJokeByCategory = (category) =>
  axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(({ data }) => data.value)
    .catch((e) => console.log(e.message));

module.exports = {
  getCategories,
  getJoke,
  getJokeByCategory,
}