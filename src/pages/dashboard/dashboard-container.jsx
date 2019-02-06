import { connect } from "react-redux";

import Dashboard from "./dashboard";
import { loadCategories } from "./actions";
import { loadCategoryRandomJoke } from "../view-category/actions";
import { resetSearchResults } from "../search/actions";
import preLoad from "../../higher-order-components/pre-load";

export const mapStateToProps = state => {
  const { categories } = state;
  return {
    categories: categories.categoryList || [],
    isLoading: categories.isLoading,
    hasError: categories.hasError.status,
    hasLoaded: categories.hasLoaded
  };
};

export const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(loadCategories());
  },

  handleLoadCategoryJokes(event) {
    const { value } = event.currentTarget;
    dispatch(loadCategoryRandomJoke(value));
  },

  handleNavigateToSearch(history) {
    dispatch(resetSearchResults());
    history.push("/search");
  }
});

export const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  handleNavigateToSearch() {
    dispatchProps.handleNavigateToSearch(ownProps.history);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(preLoad(Dashboard));
