import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ContextProvider } from './contexts/Context';
import { GlobalStyle } from './GlobalStyle';
import { Home } from './pages/Home';
import { Theme } from './pages/Theme';



function App() {
  return (
    <ContextProvider>
      <React.Fragment>
        <GlobalStyle />
        <Theme>
          <Routes>
            <Route path="/" element={<Home /> } />
          </Routes>
        </Theme>
      </React.Fragment>
    </ContextProvider>
  );
}

export default App;
