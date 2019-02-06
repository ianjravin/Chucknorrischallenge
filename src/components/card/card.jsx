import React from "react";
import { string } from "prop-types";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

const Container = styled(Card)`
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JokeImage = styled(Avatar)`
  margin-right: 1rem;
`;

const ContentCard = ({ content, iconUrl }) => (
  <Container>
    <CardContent>{content}</CardContent>
    <JokeImage alt={"Avatar"} src={iconUrl} />
  </Container>
);

ContentCard.propTypes = {
  content: string,
  iconUrl: string
};

export default ContentCard;
