import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./app/App";
import { WHITE_GREY } from "./utils/colors";
import registerServiceWorker from "./registerServiceWorker";

injectGlobal`
  body {
    background-color: ${WHITE_GREY};
    margin: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
