import React from "react";
import { arrayOf, string } from "prop-types";
import styled from "styled-components";

import CategoryDialog from "../view-category/view-category-container";
import { PrimaryButton } from "../../components/buttons/buttons";

const ListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleSelectCategory(event) {
    const { handleLoadCategoryJokes } = this.props;
    handleLoadCategoryJokes(event);
    this.setState({ open: true });
  }

  render() {
    const {
      categories,
      isLoading,
      hasError,
      hasLoaded,
      handleLoadCategoryJokes
    } = this.props;
    return (
      <ListContainer>
        <CategoryDialog
          open={this.state.open}
          onClose={this.handleClose}
          isLoading={isLoading}
          hasError={hasError}
          hasLoaded={hasLoaded}
          handleLoadCategoryJokes={handleLoadCategoryJokes}
        />

        <CategoryContainer>
          {categories.map((category, key) => (
            <PrimaryButton
              onClick={this.handleSelectCategory}
              key={key}
              value={category}
            >
              {category}
            </PrimaryButton>
          ))}
        </CategoryContainer>
      </ListContainer>
    );
  }
}

CategoryList.propTypes = {
  categories: arrayOf(string).isRequired
};

export default CategoryList;
