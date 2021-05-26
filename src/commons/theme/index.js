import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    primary: "#F44336",
    secondary: "#FFEB3B",
    error: "#9C27B0",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 5,
    background: "#9C27B0",
    textColor: "#fff",
    border: "#000",
  },
});

export default theme;
