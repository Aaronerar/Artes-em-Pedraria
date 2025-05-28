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
    return <div className="not-found">Produto não encontrado.</div>;
  }

  const total = (produto.preco * quantidade).toFixed(2);

  const incrementar = () => setQuantidade((q) => q + 1);
  const decrementar = () => setQuantidade((q) => (q > 1 ? q - 1 : 1));

  const adicionarAoCarrinho = () => {
    for (let i = 0; i < quantidade; i++) {
      addToCart(produto);
    }
    toast.success(`"${produto.nome}" adicionado ao carrinho!`);
    navigate('/carrinho');
  };

  return (
    <div className="produto-detalhes">
      <div className="card">

        <div className="imagem">
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        <div className="info">
          <h1>{produto.nome}</h1>
          <p className="descricao">{produto.descricao}</p>
          <p className="preco">R$ {produto.preco.toFixed(2)}</p>

          <div className="compra">
            <div className="quantidade">
              <button onClick={decrementar}>-</button>
              <span>{quantidade}</span>
              <button onClick={incrementar}>+</button>
            </div>

            <p className="total">
              Total: <strong>R$ {total}</strong>
            </p>

            <button className="btn adicionar" onClick={adicionarAoCarrinho}>
              Adicionar ao Carrinho
            </button>

            <button className="btn voltar" onClick={() => navigate('/produtos')}>
              Voltar aos Produtos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdutoDetalhes;
