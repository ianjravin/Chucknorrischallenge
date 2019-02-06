import styled from "styled-components";
import { Link } from "react-router-dom";

import { WHITE, DARK_BLUE, LIGHT_BLUE } from "../../utils/colors";

const LinkButton = styled(Link)`
  && {
    background-color: ${DARK_BLUE};
    border: 1px solid transparent;
    color: ${WHITE};
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    padding: 0.9rem;
    text-align: center;
    text-decoration: none;

    &: active {
      background-color: ${DARK_BLUE};
      border: 1px solid ${LIGHT_BLUE};
      color: ${WHITE};
    }

    &: hover {
      background-color: ${WHITE};
      border: 1px solid ${LIGHT_BLUE};
      color: ${DARK_BLUE};
    }
  }
`;

export default LinkButton;
