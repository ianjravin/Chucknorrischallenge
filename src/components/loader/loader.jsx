import React from "react";
import styled from "styled-components";

import CircularProgress from "@material-ui/core/CircularProgress";

import { RED } from "../../utils/colors";

const Spinner = styled(CircularProgress)`
  && {
    color: ${RED};
  }
`;

const SpinnerWrapper = styled.div`
  align-self: center;
`;

const Loader = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);

export default Loader;
