import { createTheme } from '@mui/material/styles';

// Extend the Palette interface to include customColors
declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      neonGreen: string;
      warmRed: string;
      turquoiseBlue: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      neonGreen?: string;
      warmRed?: string;
      turquoiseBlue?: string;
    };
  }
}

let appTheme = createTheme({
  palette: {
    primary: {
      main: '#425BAF',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#AE42CC',
    },
    text: {
      primary: '#010101',
    },
    background: {
        default: '#ffffff',
    },
    customColors: {
      neonGreen: '#5ebe44',
      warmRed: '#bd5e44',
      turquoiseBlue: '#97dae3',
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