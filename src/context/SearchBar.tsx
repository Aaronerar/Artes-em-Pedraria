// src/context/SearchBar.tsx
import React from 'react';
import { useSearch } from '../context/SearchContext';
import '../styles/SearchBar.css';

export default function SearchBar() {
  const { inputValue, setInputValue, setSearchTerm } = useSearch();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSearchTerm(inputValue);
  }

  function handleClear() {
    setInputValue('');
    setSearchTerm('');
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        aria-label="Campo de busca"
      />

      {inputValue && (
        <button
          type="button"
          onClick={handleClear}
          className="clear-button"
          aria-label="Limpar busca"
        >
          ✕
        </button>
      )}

      <button type="submit" aria-label="Buscar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </form>
  );
}
