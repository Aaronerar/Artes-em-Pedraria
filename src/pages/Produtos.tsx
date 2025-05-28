// src/pages/Produtos.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';
import { useCart } from '../context/CartContext';
import produtos from '../data/produtosData';
import { Produto } from '../types/interfaceDosProdutos'
import ExpandableCategory from '../components/ExpandableCategory';
import '../styles/Produtos.css';
import { toast } from 'react-toastify';

export default function Produtos() {
  const { searchTerm } = useSearch();
  const { addToCart } = useCart();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  function handleComprar(produto: Produto) {
    addToCart(produto);
    toast.success(`"${produto.nome}" adicionado ao carrinho!`);
  }

  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categorias = [
    { nome: 'Porta Guardanapo', itens: produtos.filter(p => [1, 2, 3].includes(p.id)) },
    { nome: 'Porta Papel Higiênico', itens: produtos.filter(p => [4, 5, 6].includes(p.id)) },
    { nome: 'Bolsas', itens: produtos.filter(p => [7, 8, 9, 10, 11].includes(p.id)) },
    { nome: 'Bonecas', itens: produtos.filter(p => [13, 14].includes(p.id)) },
    { nome: 'Porta Treco', itens: produtos.filter(p => [15].includes(p.id)) },
    { nome: 'Juzu', itens: produtos.filter(p => [17, 18].includes(p.id)) },
    { nome: 'Bijuterias e Colares', itens: produtos.filter(p => [19].includes(p.id)) },
    { nome: 'Diversos', itens: produtos.filter(p => [20, 21, 22, 23, 24, 25, 39].includes(p.id)) },
    { nome: 'Toalhas', itens: produtos.filter(p => [35, 38].includes(p.id)) },
  ];

  return (
    <div className="produtos-container">
      <h2>Nossos Produtos</h2>

      {searchTerm ? (
        produtosFiltrados.length > 0 ? (
          <div className="produtos-grid">
            {produtosFiltrados.map(produto => (
              <div key={produto.id} className="produto-card">
                <div className="produto-info">
                  <img src={produto.imagem} alt={produto.nome} />
                  <h4>{produto.nome}</h4>
                  <p>R$ {produto.preco.toFixed(2)}</p>
                </div>
                <Link
                  to={`/produto/${produto.id}`}
                  className="produto-comprar-btn"
                >
                  Saiba Mais
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">Nenhum produto encontrado.</p>
        )
      ) : (
        categorias.map(categoria => (
          <ExpandableCategory
            key={categoria.nome}
            categoria={{
              nome: categoria.nome,
              itens: categoria.itens.map(produto => ({
                ...produto,
                onComprar: () => handleComprar(produto),
              })),
            }}
            isExpanded={expandedCategory === categoria.nome}
            onToggle={() =>
              setExpandedCategory(prev => (prev === categoria.nome ? null : categoria.nome))
            }
          />
        ))
      )}
    </div>
  );
}
