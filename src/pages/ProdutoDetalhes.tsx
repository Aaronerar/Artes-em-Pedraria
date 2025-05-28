// src/pages/ProdutoDetalhes.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import produtos from '../data/produtosData';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import '../styles/ProdutoDetalhes.css';

function ProdutoDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantidade, setQuantidade] = useState(1);

  const produto = produtos.find((item) => item.id === Number(id));

  if (!produto) {
    toast.error('Produto não encontrado!');
    return <p>Produto não encontrado.</p>;
  }

  const total = (produto.preco * quantidade).toFixed(2);

  function handleIncrementar() {
    setQuantidade((prev) => prev + 1);
  }

  function handleDecrementar() {
    setQuantidade((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleAdicionarAoCarrinho() {
    for (let i = 0; i < quantidade; i++) {
      addToCart(produto!);
    }
    toast.success(`"${produto!.nome}" adicionado ao carrinho!`);
    navigate('/carrinho');
  }

  return (
    <div className="detalhes-container">
      <div className="detalhes-card">
        
        {/* 📷 Imagem */}
        <div className="detalhes-imagem">
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        {/* 📝 Descrição */}
        <div className="detalhes-descricao">
          <h2>{produto.nome}</h2>
          <p>{produto.descricao}</p>
        </div>

        {/* 🛒 Caixa de compra */}
        <div className="detalhes-compra">
          <p className="nome-produto">{produto.nome}</p>

          <div className="quantidade-control">
            <button onClick={handleDecrementar}>-</button>
            <span>{quantidade}</span>
            <button onClick={handleIncrementar}>+</button>
          </div>

          <p className="total">
            Total: <strong>R$ {total}</strong>
          </p>

          <div className="botoes-acoes">
            <button className="botao-adicionar" onClick={handleAdicionarAoCarrinho}>
              Adicionar ao Carrinho
            </button>
            <button className="botao-voltar" onClick={() => navigate('/produtos')}>
              Voltar aos Produtos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdutoDetalhes;
