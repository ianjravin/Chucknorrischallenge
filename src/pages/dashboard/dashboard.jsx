import React from "react";
import styled from "styled-components";
import { arrayOf, string, bool, func } from "prop-types";

import CategoryList from "./category-list";
import { SecondaryButton } from "../../components/buttons/buttons";
import Loader from "../../components/loader/loader";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchButton = styled(SecondaryButton)`
  align-self: center;
  height: 3rem;
`;

const Dashboard = ({
  categories,
  isLoading,
  hasError,
  handleLoadCategoryJokes,
  handleNavigateToSearch
}) => (
  <DashboardContainer>
    <SearchButton onClick={handleNavigateToSearch}>Search Jokes</SearchButton>
    {isLoading ? (
      <Loader />
    ) : hasError ? (
      "Error Loading categories"
    ) : (
      categories.length && (
        <CategoryList
          categories={categories}
          handleLoadCategoryJokes={handleLoadCategoryJokes}
        />
      )
    )}
  </DashboardContainer>
);

Dashboard.defaultProps = {
  categories: []
};

Dashboard.propTypes = {
  categories: arrayOf(string),
  isLoading: bool,
  hasError: bool,
  handleCategory: func
};

export default Dashboard;
