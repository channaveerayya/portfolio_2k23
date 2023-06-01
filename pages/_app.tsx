
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from 'components/layout';
import {darkTheme} from "../src/themes/darkTheme"
import {lightTheme} from "../src/themes/lightTheme"


function getActiveTheme(themeMode: 'light' | 'dark') {
  return themeMode === 'light' ? lightTheme : darkTheme;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === 'light' ? 'dark' : 'light';

    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme))
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={activeTheme}>
      <Layout><Component {...pageProps} toggleTheme={toggleTheme} /></Layout>
    </ThemeProvider>
  )
}

export default MyApp