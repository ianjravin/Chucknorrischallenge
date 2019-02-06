import React from "react";
import { shallow } from "enzyme";

import Dashboard from "../dashboard";
import Loader from "../../../components/loader/loader";
import CategoryList from "../category-list";

describe("Dashboard", () => {
  const props = {
    categories: ["movie", "science"],
    hasLoaded: true,
    isLoading: false,
    handleLoadCategoryJokes: jest.fn()
  };

  test("renders Dashboard component", () => {
    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders CategoryList component", () => {
    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper.find(CategoryList).exists()).toBeTruthy();
  });

  test("renders CategoryList component with correct category prop", () => {
    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper.find(CategoryList).props().categories).toEqual(
      props.categories
    );
  });

  test("renders CategoryList component with correct handleLoadCategoryJokes prop", () => {
    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper.find(CategoryList).props().handleLoadCategoryJokes).toEqual(
      props.handleLoadCategoryJokes
    );
  });

  test("renders Loader component when loading is true ", () => {
    const loaderProps = {
      ...props,
      hasLoaded: false,
      isLoading: true
    };
    const wrapper = shallow(<Dashboard {...loaderProps} />);
    expect(wrapper.find(Loader).exists()).toBeTruthy();
  });
});
