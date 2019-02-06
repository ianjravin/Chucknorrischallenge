const LOAD_CATEGORIES = "LOAD_CATEGORIES";
const LOAD_CATEGORIES_SUCCEEDED = "LOAD_CATEGORIES_SUCCEEDED";
const LOAD_CATEGORIES_FAILED = "LOAD_CATEGORIES_FAILED";

const loadCategories = () => ({
  type: LOAD_CATEGORIES
});

const loadCategoriesSucceeded = ({ categories }) => ({
  type: LOAD_CATEGORIES_SUCCEEDED,
  categories
});

const loadCategoriesFailed = ({ error }) => ({
  type: LOAD_CATEGORIES_FAILED,
  error
});

export {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCEEDED,
  LOAD_CATEGORIES_FAILED,
  loadCategories,
  loadCategoriesSucceeded,
  loadCategoriesFailed
};
