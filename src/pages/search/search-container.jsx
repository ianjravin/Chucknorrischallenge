import { connect } from "react-redux";

import Search from "./search";
import { searchJokes } from "./actions";

const mapStateToProps = state => {
  const { data, isLoading, hasError, hasLoaded } = state.searchResults;

  return {
    results: data,
    isLoading: isLoading,
    hasError: hasError.status,
    hasLoaded: hasLoaded
  };
};

const mapDispatchToProps = dipatch => ({
  searchJokes(query) {
    if (query) {
      dipatch(searchJokes(query));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
