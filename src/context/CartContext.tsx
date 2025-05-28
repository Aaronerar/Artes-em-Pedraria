// src/context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Produto } from '../types/interfaceDosProdutos'

interface CartContextType {
  cartItems: Produto[];
  addToCart: (produto: Produto) => void;
  removeFromCart: (id: number) => void;
  decrementFromCart: (produto: Produto) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Produto[]>(() => {
    // Carregar do localStorage ao iniciar
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Salvar no localStorage sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(produto: Produto) {
    setCartItems(prevItems => {
      const existingProduct = prevItems.find(item => item.id === produto.id);

      if (existingProduct) {
        return prevItems.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: (item.quantidade || 1) + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...produto, quantidade: 1 }];
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  function decrementFromCart(produto: Produto) {
    setCartItems(prevItems => {
      const existingProduct = prevItems.find(item => item.id === produto.id);

      if (existingProduct && (existingProduct.quantidade || 1) > 1) {
        return prevItems.map(item =>
          item.id === produto.id
            ? { ...item, quantidade: (item.quantidade || 1) - 1 }
            : item
        );
      } else {
        return prevItems.filter(item => item.id !== produto.id);
      }
    });
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, decrementFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
