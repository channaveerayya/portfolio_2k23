import { Maven_Pro } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
export const roboto = Maven_Pro({
  weight: [ '400', '500', '700','900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Euclid Circular A', 'Arial', 'sans-serif'],
});

declare module "@mui/material/styles" {
 
  interface Palette {
    color?: any
    nav?:Palette['primary']
  }
  interface PaletteOptions {

    color?: {
      background?: React.CSSProperties["color"],
      bodyBackground?: React.CSSProperties["color"],
      drawerBackground?: React.CSSProperties["color"],
    }
    nav: PaletteOptions["primary"];
  }

}
// Create a theme instance.
export const lightTheme = createTheme({
  palette: {
    mode:"light",
    primary: {
      main: '#27374D',
    },
    secondary: {
      main: '#283071',
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
      primary:  "#27374D",
      secondary:  "#19857b",
      disabled:  "#19857b",
    },
    background:{
      default: "#19857b",
      paper: "#19857b",
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
      background: "#19857b",
      bodyBackground: "#ffffff",
      drawerBackground:"#C4DFDF"
    },
    nav:{
      main:'#E3F4F4',
      // light:'#F6F1F1',
      // dark:'#0F4C75',
    },
    
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  
});

