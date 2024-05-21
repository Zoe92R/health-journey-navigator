import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#2196d7'
    },
    secondary: {
      main: '#F8B8AA',
    },
    success: {
      main: '#23a629'
    }
  },
});