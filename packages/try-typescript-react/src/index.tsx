import * as React from "react";
import * as ReactDOM from "react-dom/client";

import Hello from "./components/Hello";

const root = ReactDOM.createRoot(
  document.getElementById("example") as HTMLElement,
);
root.render(<Hello compiler="TypeScript" framework="React" />);
