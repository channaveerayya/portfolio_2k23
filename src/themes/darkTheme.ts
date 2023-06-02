import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

declare module "@mui/material/styles" {
 
  interface Palette {
    color?: any
    nav?:Palette['primary']
  }
  interface PaletteOptions {

    color?: {
      bodyBackground?: React.CSSProperties["color"],
      background?: React.CSSProperties["color"],
      drawerBackground?: React.CSSProperties["color"],

    }
    nav: PaletteOptions["primary"];
  }

}
// Create a theme instance.
export const darkTheme = createTheme({
  palette: {
    mode:"dark",
    primary: {
      main: '#DDE6ED',
    },
    secondary: {
      main: '#19857b',
    },
    // error: {
    //   main: red.A400,
    // },
    // info: {
    //   main: red.A400,
    // },
    // success: {
    //   main: red.A400,
    // },
    // common: {
    //   white: red.A400,
    //   black: red.A400,
    // },
    text:{
      primary:  "#F1F6F9",
      secondary:  "#9BA4B5",
      disabled:  "#F6F1F1",
    },
    background:{
      default: "#080202",
      paper: "#1B262C",
    },
    action:{
      active:  '#19857b',
      hover:  '#19857b',
      hoverOpacity: 1,
      selected:  '#19857b',
      selectedOpacity: 1,
      disabled:  '#19857b',
      disabledOpacity: 1,
      disabledBackground:  '#19857b',
      focus:  '#19857b',
      focusOpacity: 1,
      activatedOpacity: 1,
    },
    divider: '#19857b',
    color: {
      background: "#1B262C",
      bodyBackground: "#1B262C",
      drawerBackground:"#27374D"
      
    },
    nav:{
      main:'#0F4C75',
      light:'#0F4C75',
      dark:'#0F4C75',
    },
    
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  
});
