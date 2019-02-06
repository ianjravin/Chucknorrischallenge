const SEARCH_JOKES = "SEARCH_JOKES";
const SEARCH_JOKES_SUCCEEDED = "SEARCH_JOKES_SUCCEEDED";
const SEARCH_JOKES_FAILED = "SEARCH_JOKES_FAILED";
const RESET_SEARCH_RESULTS = "RESET_SEARCH_RESULTS";

const searchJokes = query => ({
  type: SEARCH_JOKES,
  query
});

const searchJokesSucceeded = data => ({
  type: SEARCH_JOKES_SUCCEEDED,
  data
});

const resetSearchResults = () => ({
  type: RESET_SEARCH_RESULTS
});

const searchJokesFailed = error => ({
  type: SEARCH_JOKES_FAILED,
  error
});

export {
  SEARCH_JOKES,
  SEARCH_JOKES_SUCCEEDED,
  SEARCH_JOKES_FAILED,
  RESET_SEARCH_RESULTS,
  searchJokes,
  searchJokesSucceeded,
  searchJokesFailed,
  resetSearchResults
};
