import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { ContextProvider } from './contexts/Context';
import { GlobalStyle } from './GlobalStyle';
import { CategoryDetail } from './pages/CategoryDetail';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ProductDetail } from './pages/ProductDetail';
import { RegisterProduct } from './pages/RegisterProduct';
import { Reports } from './pages/Reports';
import { Theme } from './pages/Theme';



function App() {
  return (
    <ContextProvider>
      <React.Fragment>
        <GlobalStyle />
        <Theme>
        <ToastContainer hideProgressBar theme='dark' />
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/categoryDetail/:id" element={<CategoryDetail />} />
            <Route path="/productDetail/:id" element={<ProductDetail />} />
            <Route path="/registerProduct" element={<RegisterProduct />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Theme>
      </React.Fragment>
    </ContextProvider>
  );
}

export default App;
