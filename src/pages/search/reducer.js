import {
  SEARCH_JOKES,
  SEARCH_JOKES_SUCCEEDED,
  SEARCH_JOKES_FAILED,
  RESET_SEARCH_RESULTS
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  hasLoaded: false,
  hasError: {
    status: false,
    error: ""
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_JOKES: {
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

    case SEARCH_JOKES_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
        data: action.data
      };
    }

    case SEARCH_JOKES_FAILED: {
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

    case RESET_SEARCH_RESULTS: {
      return {
        ...state,
        data: [],
        hasLoaded: false,
        hasError: {
          status: false,
          error: ""
        }
      };
    }

    default: {
      return state;
    }
  }
};
