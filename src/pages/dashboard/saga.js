import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_CATEGORIES,
  loadCategoriesSucceeded,
  loadCategoriesFailed
} from "./actions";
import { getJokesCategories } from "../../apiEndpoints";

export function* fetchJokesCategories() {
  try {
    const { body } = yield call(getJokesCategories);

    yield put(loadCategoriesSucceeded({ categories: body }));
  } catch (error) {
    yield put(loadCategoriesFailed(error));
  }
}

function* watchFetchJokesCategories() {
  yield takeLatest(LOAD_CATEGORIES, fetchJokesCategories);
}

export default watchFetchJokesCategories;
