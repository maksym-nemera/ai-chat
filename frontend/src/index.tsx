import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import store from './app/store';
import { AppRouting } from './AppRouting';
import { ThemeProvider, createTheme } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#D8E1ED',
      light: '#F9F9F9',
      dark: '#FEE2C5',
      contrastText: '#C4DDFF',
    },
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
    h2: {
      fontWeight: 700,
      fontSize: '24px',
    },
    h4: {
      fontWeight: 700,
      fontSize: '18px',
    },
    h5: {
      fontWeight: 700,
      fontSize: '16px',
    },
  },
});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <AppRouting />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
);

reportWebVitals();
