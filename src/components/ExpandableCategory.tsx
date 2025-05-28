// src/components/ExpandableCategory.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExpandableCategory.css';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  onComprar?: () => void;
}

interface Categoria {
  nome: string;
  itens: Produto[];
}

interface ExpandableCategoryProps {
  categoria: Categoria;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ExpandableCategory({
  categoria,
  isExpanded,
  onToggle,
}: ExpandableCategoryProps) {
  return (
    <div className="expandable-category">
      <div className="category-toggle" onClick={onToggle}>
        {categoria.nome}
        <span className={`arrow ${isExpanded ? 'up' : 'down'}`} />
      </div>

      {isExpanded && (
        <div className="produtos-grid">
          {categoria.itens.map(produto => (
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
      )}
    </div>
  );
}
