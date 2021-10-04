import { createTheme } from "@mui/material";

const useMyTheme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        light: "rgba(108, 99, 255, 0.05);",
        main: "#6C63FF",
      },
      secondary: {
        main: "#F2F1FF",
      },
      dark: {
        main: "#2F2E41",
      },
    },
  });
  return theme;
};
export default useMyTheme;
