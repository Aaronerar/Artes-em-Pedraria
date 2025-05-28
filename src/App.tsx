// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import { SearchProvider } from './context/SearchContext'; // contexto de busca
import { CartProvider } from './context/CartContext';     // contexto do carrinho
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <CartProvider>
          <div className="app-container">
            <Header />
            <main className="main-content">
              <AppRoutes />
            </main>
            <Footer />
          </div>
          {/* ToastContainer fica fora do layout visual, mas dentro dos providers */}
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            style={{ fontSize: '1rem' }}
          />
        </CartProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
