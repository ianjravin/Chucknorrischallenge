import {
  LOAD_CATEGORY_RANDOM_JOKE,
  LOAD_CATEGORY_RANDOM_JOKE_SUCCEEDED,
  LOAD_CATEGORY_RANDOM_JOKE_FAILED
} from "./actions";

const initialState = {
  data: {},
  isLoading: false,
  hasLoaded: false,
  hasError: {
    status: false,
    error: ""
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_CATEGORY_RANDOM_JOKE: {
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

    case LOAD_CATEGORY_RANDOM_JOKE_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        data: { ...action.data }
      };
    }

    case LOAD_CATEGORY_RANDOM_JOKE_FAILED: {
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
