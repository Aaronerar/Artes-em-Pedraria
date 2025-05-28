// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Produtos from '../pages/Produtos';
import ProdutoDetalhes from '../pages/ProdutoDetalhes';
import Carrinho from '../pages/Carrinho';
import Contato from '../pages/Contato';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produto/:id" element={<ProdutoDetalhes />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
