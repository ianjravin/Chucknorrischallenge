import { call, put, takeLatest } from "redux-saga/effects";

import { getJokesCategories } from "../../../apiEndpoints";
import {
  LOAD_CATEGORIES,
  loadCategoriesSucceeded,
  loadCategoriesFailed
} from "../actions";

import watchFetchJokesCategories, { fetchJokesCategories } from "../saga";

describe("Dashboard saga", () => {
  const finalIteration = { done: true, value: undefined };

  const iterator = fetchJokesCategories();
  test("calls getJokesCategories", () => {
    const result = iterator.next();
    expect(result.value).toEqual(call(getJokesCategories));
  });

  test("puts loadCategoriesSucceeded action", () => {
    const fetchCategoriesResponse = {
      body: ["category 1", "category 2", "category 3"]
    };
    const result = iterator.next(fetchCategoriesResponse);
    expect(result.value).toEqual(
      put(loadCategoriesSucceeded({ categories: fetchCategoriesResponse.body }))
    );
  });

  test("final saga iteration reached", () => {
    const result = iterator.next();
    expect(result).toEqual(finalIteration);
  });
});

describe("failed getJokesCategories request", () => {
  const iterator = fetchJokesCategories();
  iterator.next();

  test("puts the loadCategoriesFailed action", () => {
    const error = { error: "Resource not found" };
    const result = iterator.throw(error);
    expect(result.value).toEqual(put(loadCategoriesFailed(error)));
  });
});

describe("worker saga", () => {
  const iterator = watchFetchJokesCategories();

  test("worker saga watches as expected", () => {
    expect(iterator.next().value).toEqual(
      takeLatest(LOAD_CATEGORIES, fetchJokesCategories)
    );
  });
});
