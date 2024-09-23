import * as React from "react";
import { createRoot } from "react-dom/client";

import Hello from "./Hello";

it("renders", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<Hello compiler="TypeScript" framework="React" />);
});
