import React from "react";
import styled from "styled-components";

import Loader from "../../components/loader/loader";
import TextField from "../../components/text-field/text-field";
import { PrimaryButton } from "../../components/buttons/buttons";
import LinkButton from "../../components/link/link";
import ResultsList from "./resultsList";
import Card from "../../components/card/card";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SearchInputContainer = styled.div`
  display: flex;
`;

const SearchField = styled(TextField)`
  && {
    min-width: 8rem;
  }
`;

const SearchButton = styled(PrimaryButton)`
  && {
    margin 0;
    width: 7rem;
  }
`;

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.searchOnEnter = this.searchOnEnter.bind(this);
  }

  searchOnEnter(event) {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  }

  handleSearch() {
    const { searchQuery } = this.state;
    this.props.searchJokes(searchQuery);
  }

  onChange(event) {
    const { value } = event.target;
    this.setState({ searchQuery: value });
  }

  handleFocus() {
    this.setState({ searchQuery: "" });
  }

  render() {
    const { isLoading, hasError, hasLoaded, results } = this.props;

    return (
      <SearchContainer>
        <SearchHeader>
          <LinkButton to={"/"}>{"Home".toUpperCase()}</LinkButton>
          <SearchInputContainer>
            <SearchField
              name={"searchField"}
              placeholder={"search for..."}
              onKeyPress={this.searchOnEnter}
              onChange={this.onChange}
              onFocus={this.handleFocus}
              value={this.state.searchQuery}
            />
            <SearchButton onClick={this.handleSearch}>Search</SearchButton>
          </SearchInputContainer>
        </SearchHeader>

        {isLoading ? (
          <Loader />
        ) : hasError && hasLoaded ? (
          <Card content={"Error Searching Jokes"} />
        ) : (
          hasLoaded && (
            <ContentContainer>
              <ResultsList results={results} />
            </ContentContainer>
          )
        )}
      </SearchContainer>
    );
  }
}

export default Category;
