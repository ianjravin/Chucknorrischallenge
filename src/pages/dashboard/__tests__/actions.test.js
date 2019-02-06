import React from "react";
import { shallow } from "enzyme";

import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCEEDED,
  LOAD_CATEGORIES_FAILED,
  loadCategories,
  loadCategoriesSucceeded,
  loadCategoriesFailed
} from "../actions";

describe("Dashboard actions", () => {
  test("loadCategoris action", () => {
    const expected = {
      type: LOAD_CATEGORIES
    };
    expect(loadCategories()).toEqual(expected);
  });

  test("loadCategoriesSucceeded action", () => {
    const categories = ["test1", "test2"];
    const expected = {
      type: LOAD_CATEGORIES_SUCCEEDED,
      categories
    };
    expect(loadCategoriesSucceeded({ categories })).toEqual(expected);
  });

  test("loadCategoriesSucceeded action", () => {
    const error = "Not Found";
    const expected = {
      type: LOAD_CATEGORIES_FAILED,
      error
    };
    expect(loadCategoriesFailed({ error })).toEqual(expected);
  });
});
