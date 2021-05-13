const { getCategories, getJoke, getJokeByCategory } = require('../models/chuckNorrisJokes');

const listCategories = async (_req, res) => {
  const categories = await getCategories();
  return res.render('categories/index', { categories });
};

const listRandomJoke = async (req, res) => {
  const joke = await getJoke();
  return res.render('jokes/index', { joke })
};

const listJokeByCategory = async (req, res) => {
  const { category } = req.params;
  const joke = await getJokeByCategory(category);
  return res.render('jokes/index', { joke });
};

module.exports = {
  listCategories,
  listRandomJoke,
  listJokeByCategory,
}