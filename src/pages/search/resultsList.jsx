import React, { Fragment } from "react";
import styled from "styled-components";

import Card from "../../components/card/card";
import { DARK_GREY } from "../../utils/colors";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  align-self: center;
  color: ${DARK_GREY};
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  margin: 0.5rem 0;
`;

const ResultsList = ({ results }) => (
  <ListContainer>
    {results.length ? (
      <Fragment>
        <Heading>Search Results</Heading>
        {results.map((result, index) => (
          <Card key={index} content={result.value} iconUrl={result.icon_url} />
        ))}
      </Fragment>
    ) : (
      <Card content={"No results found"} />
    )}
  </ListContainer>
);

export default ResultsList;
