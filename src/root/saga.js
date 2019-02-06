import { all } from "redux-saga/effects";

import categorySaga from "../pages/dashboard/saga";
import categoryRandomJoke from "../pages/view-category/saga";
import searchJokes from "../pages/search/saga";

export default function* rootSaga() {
  yield all([...categorySaga(), ...categoryRandomJoke(), ...searchJokes()]);
}
