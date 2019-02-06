import {
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCEEDED,
  LOAD_CATEGORIES_FAILED
} from "./actions";

const initialState = {
  categoryList: [],
  isLoading: false,
  hasLoaded: false,
  hasError: {
    status: false,
    error: ""
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_CATEGORIES: {
      return {
        ...state,
        isLoading: true,
        hasLoaded: false,
        hasError: {
          status: false,
          error: ""
        }
      };
    }

    case LOAD_CATEGORIES_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        categoryList: action.categories
      };
    }

    case LOAD_CATEGORIES_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        hasError: {
          status: true,
          error: action.error
        }
      };
    }

    default: {
      return state;
    }
  }
};
