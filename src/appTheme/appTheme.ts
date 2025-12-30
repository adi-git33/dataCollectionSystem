import { createTheme } from "@mui/material/styles";

// Extend the Palette interface to include customColors
declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      neonGreen: string;
      warmRed: string;
      gray: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      neonGreen?: string;
      warmRed?: string;
      gray?: string;
    };
  }
}

let appTheme = createTheme({
  palette: {
    primary: {
      main: "#AE42CC",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#425BAF",
    },
    text: {
      primary: "#010101",
    },
    background: {
      default: "#ffffff",
    },
    customColors: {
      neonGreen: "#5ebe44",
      warmRed: "#bd5e44",
      gray: "#939393",
    },
  },
});

appTheme = createTheme(appTheme, {
  palette: {
    info: {
      main: appTheme.palette.secondary.main,
    },
  },
});

export default appTheme;
