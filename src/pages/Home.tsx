// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMedal, FaGem, FaLock } from 'react-icons/fa';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Bem-vindo à Artes em Pedraria</h1>
      <p>Joias artesanais exclusivas, feitas com carinho!</p>
      <button onClick={() => navigate('/produtos')}>Produtos</button>

      <div className="benefits">
        <div className="benefit">
          {FaMedal({ size: 30, color: '#ffe600' })}
          <h3>Qualidade Garantida</h3>
          <p>Peças feitas com materiais selecionados e acabamento impecável.</p>
        </div>
        <div className="benefit">
          {FaGem({ size: 30, color: '#ffe600' })}
          <h3>Exclusividade</h3>
          <p>Cada joia é única, feita à mão com muito amor e dedicação.</p>
        </div>
        <div className="benefit">
          {FaLock({ size: 30, color: '#ffe600' })}
          <h3>Compra Segura</h3>
          <p>Ambiente protegido e formas de pagamento seguras.</p>
        </div>
      </div>
    </div>
  );
}
