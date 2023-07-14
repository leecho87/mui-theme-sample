import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import createTheme from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import "./variable.css";

const root = ReactDOM.createRoot(document.getElementById('root'));


const changeTheme = (theme) => {
  if (theme) {
    localStorage.setItem("themeMode", theme);
  }
 
  const currentTheme = createTheme(theme || 'light');

  return currentTheme;
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={changeTheme()}>
      <CssBaseline />
      <App changeTheme={changeTheme} />
    </ThemeProvider>
  </React.StrictMode>
);