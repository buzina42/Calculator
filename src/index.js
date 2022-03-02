import { StrictMode } from "react";
import ReactDOM from "react-dom";

import NewApp from "./NewApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <NewApp />
  </StrictMode>,
  rootElement
);
