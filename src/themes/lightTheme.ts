import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

declare module "@mui/material/styles" {
 
  interface Palette {
    color?: any
  }
  interface PaletteOptions {

    color?: {
      background?: React.CSSProperties["color"],
    }
  }
}

// Create a theme instance.
export const lightTheme = createTheme({
  palette: {
    mode:"light",
    primary: {
      main: '#b71818',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    color: {
      background: "#FCE9F1",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
