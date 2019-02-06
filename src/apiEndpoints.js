import request from "superagent";

const baseURl = "https://api.chucknorris.io/jokes/";

const getRandomCategoryJoke = category =>
  request.get(`${baseURl}random?category=${category}`);

const getJokesCategories = () => request.get(`${baseURl}categories`);

const searchJokes = query => request.get(`${baseURl}search?query=${query}`);

export { getRandomCategoryJoke, getJokesCategories, searchJokes };
