import styled from "styled-components";
import Button from "@material-ui/core/Button";

import media from "../../utils/media";
import {
  WHITE,
  DARK_BLUE,
  LIGHT_BLUE,
  LIGHT_RED,
  LIGHT_ORANGE
} from "../../utils/colors";

const PrimaryButton = styled(Button)`
  && {
    background-color: ${DARK_BLUE};
    background-color: ${props => (props.inverted ? WHITE : DARK_BLUE)};
    border: 1px solid ${props => (props.inverted ? DARK_BLUE : "transparent")};
    border-radius: 0;
    box-sizing: border-box;
    color: ${props => (props.inverted ? DARK_BLUE : WHITE)};
    font-size: 1rem;
    font-weight: 400;
    height: 3rem;
    line-height: 1;
    margin: 0.5rem 0;
    width: 100%;

    &: hover {
      background-color: ${props => (props.inverted ? DARK_BLUE : WHITE)};
      border: 1px solid ${LIGHT_BLUE};
      color: ${props => (props.inverted ? WHITE : DARK_BLUE)};
    }

    ${media.small`
      margin: 1rem;
      width: 10rem;
    `};
  }
`;

const SecondaryButton = styled(Button)`
  && {
    border-radius: 0;
    background: linear-gradient(45deg, ${LIGHT_RED} 30%, ${LIGHT_ORANGE} 90%);
    color: ${WHITE};
    width: 100%;
  }
`;

export { PrimaryButton, SecondaryButton };
