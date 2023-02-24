import React from "react";
import ReactDOM from "react-dom";
import { SampleButton, DefaultButton, IconButton } from "core/components";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: mfe-host-example</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <div>I am the example host</div>
    <div>I am consuming the following from mfe-core</div>
    <SampleButton text="My Button" />
    <br />
    <DefaultButton disabled={true} />
    <br />
    <IconButton loading={true}>Hello</IconButton>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
