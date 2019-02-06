import reducer from "../reducer";
import {
  LOAD_CATEGORIES,
  loadCategoriesSucceeded,
  loadCategoriesFailed
} from "../actions";

describe("Dashboard reducer", () => {
  const state = {
    categoryList: [],
    isLoading: false,
    hasLoaded: false,
    hasError: {
      status: false,
      error: ""
    }
  };

  test("LOAD_CATEGORIES", () => {
    const expected = {
      ...state,
      isLoading: true
    };
    expect(reducer(state, { type: LOAD_CATEGORIES })).toEqual(expected);
  });

  test("LOAD_CATEGORIES_SUCCEEDED", () => {
    const expected = {
      ...state,
      categoryList: ["test2"],
      isLoading: false,
      hasLoaded: true
    };
    expect(
      reducer(state, loadCategoriesSucceeded({ categories: ["test2"] }))
    ).toEqual(expected);
  });

  test("LOAD_CATEGORIES_FAILED", () => {
    const expected = {
      ...state,
      isLoading: false,
      hasLoaded: true,
      hasError: {
        status: true,
        error: "Network failure"
      }
    };
    expect(
      reducer(state, loadCategoriesFailed({ error: "Network failure" }))
    ).toEqual(expected);
  });

  test("default", () => {
    expect(reducer(state, { type: "ANY" })).toEqual(state);
  });
});
