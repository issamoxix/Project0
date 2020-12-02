import React from 'react'
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import {Global, globalTheme} from './styles/global'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Routes from './Routes/routes';
function App() {
  return (
    <Router>
      <Switch>
      <ThemeProvider theme={globalTheme}>
      <Global />
      <NavBar />
      {
        Routes.map((route,i)=>(
          <Route key={i} {...route} />
        ))
      }
      </ThemeProvider>
      </Switch>
    </Router>
  );
}

export default App;
