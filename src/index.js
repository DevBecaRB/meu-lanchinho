import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';

// Criar o tema com a fonte especificada
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat', // Especifique a fonte aqui
  },
});

// Selecionar o elemento root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizar o aplicativo dentro do ThemeProvider
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Para medição de desempenho (opcional)
reportWebVitals();
