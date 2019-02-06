import {
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
} from "../dashboard-container";
import { loadCategories } from "../actions";
import { loadCategoryRandomJoke } from "../../view-category/actions";
import { resetSearchResults } from "../../search/actions";

describe("Dashboard Container", () => {
  describe("mapStateToProps", () => {
    test("maps correct parameters to props", () => {
      const state = {
        categories: {
          categoryList: ["category 1"],
          isLoading: false,
          hasLoaded: true,
          hasError: {
            status: false,
            error: ""
          }
        }
      };

      const expected = {
        categories: ["category 1"],
        isLoading: false,
        hasError: false,
        hasLoaded: true
      };
      expect(mapStateToProps(state)).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    test("onLoad: dispatch is called once", () => {
      const dispatchSpy = jest.fn();
      mapDispatchToProps(dispatchSpy).onLoad();
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
    });

    test("onLoad: dispatch is called with loadCategories", () => {
      const dispatchSpy = jest.fn();
      mapDispatchToProps(dispatchSpy).onLoad();
      expect(dispatchSpy).toBeCalledWith(loadCategories());
    });

    test("handleLoadCategoryJokes: dispatch is called once", () => {
      const dispatchSpy = jest.fn();
      const event = {
        currentTarget: {
          target: { value: "dev" }
        }
      };
      mapDispatchToProps(dispatchSpy).handleLoadCategoryJokes(event);
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
    });

    test("handleLoadCategoryJokes: dispatch is called with loadCategoryRandomJoke action", () => {
      const dispatchSpy = jest.fn();
      const event = {
        currentTarget: {
          target: { value: "dev" }
        }
      };
      mapDispatchToProps(dispatchSpy).handleLoadCategoryJokes(event);
      expect(dispatchSpy).toBeCalledWith(loadCategoryRandomJoke());
    });

    test("handleNavigateToSearch: dispatch is called once", () => {
      const dispatchSpy = jest.fn();
      const history = {
        push: jest.fn()
      };
      mapDispatchToProps(dispatchSpy).handleNavigateToSearch(history);
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
    });

    test("handleNavigateToSearch: dispatch is called with resetSearchResults action", () => {
      const dispatchSpy = jest.fn();
      const history = {
        push: jest.fn()
      };
      mapDispatchToProps(dispatchSpy).handleNavigateToSearch(history);
      expect(dispatchSpy).toBeCalledWith(resetSearchResults());
    });
  });

  describe("mergeProps", () => {
    const stateProps = {};
    const dispatchProps = {
      handleNavigateToSearch: jest.fn()
    };

    const ownProps = {
      history: {
        push: jest.fn()
      }
    };
    test("calls handleNavigateToSearch", () => {
      mergeProps(stateProps, dispatchProps, ownProps).handleNavigateToSearch();
      expect(dispatchProps.handleNavigateToSearch).toHaveBeenCalledTimes(1);
    });

    test("calls handleNavigateToSearch with correct params", () => {
      mergeProps(stateProps, dispatchProps, ownProps).handleNavigateToSearch();
      expect(dispatchProps.handleNavigateToSearch).toHaveBeenCalledWith(
        ownProps.history
      );
    });
  });
});
