import * as React from "react";
import { render } from "react-dom";
import { AutoChild, ExplicitChild, ContextChild } from "./components";

import "./styles.css";
import { autoTag } from "./utils/autotag";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <AutoChild />

      <ExplicitChild name="Hello     there 1" testId="Hello   there  1">
        <ExplicitChild name="child" testId="Hello there 1 child" />
      </ExplicitChild>

      <ContextChild testId="context-child-root">
        <div {...autoTag("context-child-root", "child 1")}>Child div</div>
        <div {...autoTag("context-child-root", "child 2")}>Child div</div>
      </ContextChild>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
