import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Paper } from '@mui/material';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeProviderComponent = ({ children }) => {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      ...(mode==='light'
        ?{
            text: {
                primary: '#000000',
                secondary: '#3D3D3D',
        },
    }:{
        background: {
            default: '#121212',
            paper: '#121212',
          },
          text: {
            primary: '#ffffff',
            secondary: '#B0B0B0',
          },
    }
      ),

    },
    typography: {
        allVariants: {
          color: mode === 'light' ? '#000000' : '#ffffff',
        },
      },

  }), [mode]);

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper style={{ }}>
          {children}
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProviderComponent;
