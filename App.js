import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => <h1>Namaste react tutorial</h1>;

const HeadingComponet = () => (
  <div>
    <Title />
    <h1>Namaste react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeadingComponet />);
