import { ThemeProvider } from "context/theme/ThemeContext";
import React from "react";

function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
