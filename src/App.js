import React from 'react'
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import {Global, globalTheme} from './styles/global'
function App() {
  return (
    <>
      <ThemeProvider theme={globalTheme}>
      <Global />
      <NavBar />
      <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
