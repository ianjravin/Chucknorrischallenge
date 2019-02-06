import { connect } from "react-redux";

import CategoryDialog from "./view-category";

const mapStateToProps = state => {
  const { data, isLoading, hasError, hasLoaded } = state.randomCategoryJoke;

  return {
    categories: state.categories.categoryList || [],
    category: data.category,
    joke: data.joke,
    iconUrl: data.iconUrl,
    isLoading: isLoading,
    hasError: hasError.status,
    hasLoaded: hasLoaded
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryDialog);
