// src/pages/Carrinho.tsx
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Carrinho.css';
import { useNavigate } from 'react-router-dom';

function Carrinho() {
  const { cartItems, addToCart, removeFromCart, decrementFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.preco * (item.quantidade || 1),
    0
  );

  return (
    <div className="carrinho-container">
      {cartItems.length === 0 ? (
        <div className="carrinho-vazio">
          <p>O carrinho está vazio!</p>
          <button className="botao-voltar" onClick={() => navigate('/produtos')}>
            Ir para os produtos
          </button>
        </div>
      ) : (
        <div className="carrinho-conteudo">
          <div className="carrinho-itens">
            {cartItems.map((item) => (
              <div key={item.id} className="carrinho-card">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="carrinho-card-imagem"
                />
                <div className="carrinho-card-info">
                  <div className="info-esquerda">
                    <h3>{item.nome}</h3>
                    <button
                      className="botao-remover"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Excluir
                    </button>
                  </div>
                  <div className="info-direita">
                    <div className="carrinho-quantidade">
                      <button
                        onClick={() => {
                          if (item.quantidade! > 1) {
                            decrementFromCart(item);
                          }
                        }}
                        disabled={item.quantidade === 1}
                      >
                        -
                      </button>
                      <span>{item.quantidade}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                    <div className="preco-total">
                      R$ {(item.preco * (item.quantidade || 1)).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carrinho-total">
            <h2>Total: R$ {total.toFixed(2)}</h2>
            <button
              className="botao-finalizar"
              onClick={() => alert('Compra finalizada!')}
            >
              Finalizar Compra
            </button>
            <button
              className="botao-voltar"
              onClick={() => navigate('/produtos')}
            >
              Continuar Comprando
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
