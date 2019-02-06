import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_CATEGORY_RANDOM_JOKE,
  loadCategoryRandomJokeSucceeded,
  loadCategoryRandomJokeFailed
} from "./actions";
import { getRandomCategoryJoke } from "../../apiEndpoints";

export function* fetchCategoryRandomJoke({ category }) {
  try {
    const {
      body: { category: categoryList, icon_url, id, value }
    } = yield call(getRandomCategoryJoke, category);

    yield put(
      loadCategoryRandomJokeSucceeded({
        id,
        category: categoryList === null ? "explicit" : categoryList[0],
        iconUrl: icon_url,
        joke: value
      })
    );
  } catch (error) {
    yield put(loadCategoryRandomJokeFailed(error));
  }
}

function* watchFetchCategoryRandomJoke() {
  yield takeLatest(LOAD_CATEGORY_RANDOM_JOKE, fetchCategoryRandomJoke);
}

export default watchFetchCategoryRandomJoke;
