const axios = require('axios');
const endPoint = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";

const getJokes = () =>
  axios.get(endPoint)
    .then(({ data }) => data.joke)
    .catch((e) => console.log(e.message))

module.exports = {
  getJokes,
};
