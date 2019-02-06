import React, { Fragment } from "react";
import styled from "styled-components";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItemText from "@material-ui/core/ListItemText";
import DialogActions from "@material-ui/core/DialogActions";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Avatar from "@material-ui/core/Avatar";

import Loader from "../../components/loader/loader";
import { PrimaryButton } from "../../components/buttons/buttons";

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.5rem;
`;

const Title = styled(DialogTitle)`
  && {
    padding: 1rem 0.5rem;
    text-align: center;
  }
`;

const ContentDialog = styled(Dialog).attrs({
  classes: { paper: "Content" }
})`
  .Content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 16rem;
    width: 100%;
  }
`;

const ErrorWrapper = styled.div`
  margin: 0 2rem;
`;

const Icon = styled(Avatar)`
  align-self: center;
`;

const ActionButton = styled(PrimaryButton)`
  && {
    margin: 0.5rem 1rem;
    width: 10rem;
  }
`;

const ActionFooter = styled(DialogActions)`
  && {
    display: flex;
    justify-content: space-between;
  }
`;

const CategoryDialog = ({
  joke,
  category,
  iconUrl,
  onClose,
  open,
  selectedValue,
  isLoading,
  hasLoaded,
  hasError,
  handleLoadCategoryJokes,
  ...otherProps
}) => (
  <ContentDialog onClose={onClose} open={open} {...otherProps}>
    <Title>
      {isLoading
        ? "Loading category joke..."
        : category
          ? category.toUpperCase()
          : ""}
    </Title>
    <ContentSection>
      {isLoading ? (
        <Loader />
      ) : hasLoaded && hasError ? (
        <ErrorWrapper>
          Oops! Sorry, something went wrong while loading. Kindly try again
        </ErrorWrapper>
      ) : (
        <Fragment>
          <Icon src={iconUrl} />
          <ListItemText primary={joke} />
        </Fragment>
      )}
    </ContentSection>
    <ActionFooter>
      <ActionButton
        inverted={"true"}
        onClick={handleLoadCategoryJokes}
        value={category}
        color="primary"
      >
        Next Joke
      </ActionButton>
      <ActionButton inverted={"true"} onClick={onClose} color="primary">
        Close
      </ActionButton>
    </ActionFooter>
  </ContentDialog>
);

export default withMobileDialog({ breakpoint: "xs" })(CategoryDialog);
