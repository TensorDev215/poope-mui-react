import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'
import App from './App';

const theme = createTheme();

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      
    </StyledEngineProvider>
  </React.StrictMode>
)
