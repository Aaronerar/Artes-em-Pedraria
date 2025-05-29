// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import SearchBar from '../context/SearchBar';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <NavLink to="/">
            <img
              src="/imagens/logo-pedraria.png"
              alt="Logo Artes em Pedraria"
              className="logo"
            />
          </NavLink>
        </div>

        <div className="search-bar">
          <SearchBar />
        </div>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Início
          </NavLink>
          <NavLink
            to="/produtos"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Produtos
          </NavLink>
          <NavLink
            to="/carrinho"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Carrinho
          </NavLink>
          <NavLink
            to="/contato"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
