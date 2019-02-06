const LOAD_CATEGORY_RANDOM_JOKE = "LOAD_CATEGORY_RANDOM_JOKE";
const LOAD_CATEGORY_RANDOM_JOKE_SUCCEEDED =
  "LOAD_CATEGORY_RANDOM_JOKE_SUCCEEDED";
const LOAD_CATEGORY_RANDOM_JOKE_FAILED = "LOAD_CATEGORY_RANDOM_JOKE_FAILED";

const loadCategoryRandomJoke = category => ({
  type: LOAD_CATEGORY_RANDOM_JOKE,
  category
});

const loadCategoryRandomJokeSucceeded = data => ({
  type: LOAD_CATEGORY_RANDOM_JOKE_SUCCEEDED,
  data
});

const loadCategoryRandomJokeFailed = error => ({
  type: LOAD_CATEGORY_RANDOM_JOKE_FAILED,
  error
});

export {
  LOAD_CATEGORY_RANDOM_JOKE,
  LOAD_CATEGORY_RANDOM_JOKE_SUCCEEDED,
  LOAD_CATEGORY_RANDOM_JOKE_FAILED,
  loadCategoryRandomJoke,
  loadCategoryRandomJokeSucceeded,
  loadCategoryRandomJokeFailed
};
