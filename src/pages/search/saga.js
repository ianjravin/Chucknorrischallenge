import { call, put, takeLatest } from "redux-saga/effects";

import {
  SEARCH_JOKES,
  searchJokesSucceeded,
  searchJokesFailed
} from "./actions";
import { searchJokes as fetchJokes } from "../../apiEndpoints";

export function* searchJokes({ query }) {
  try {
    const {
      body: { result }
    } = yield call(fetchJokes, query);

    // takes first 10 for simplicity
    const topTen = result.length > 10 ? result.slice(0, 10) : result;

    yield put(searchJokesSucceeded(topTen));
  } catch (error) {
    yield put(searchJokesFailed(error));
  }
}

function* watchSearchJokes() {
  yield takeLatest(SEARCH_JOKES, searchJokes);
}

export default watchSearchJokes;
