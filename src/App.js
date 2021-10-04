import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import useMyTheme from "./theme";
function App() {
  const theme = useMyTheme();
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" color="secondary">
        Hello
      </Typography>
    </ThemeProvider>
  );
}
export default App;
