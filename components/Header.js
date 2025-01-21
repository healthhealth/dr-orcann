import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Placeholder para a lógica de animação do placeholder
  useEffect(() => {
    const searchInput = searchRef.current?.querySelector('input');
    if (!searchInput) return;

    const suggestions = [
      'Cannabis para ansiedade',
      'O que é TDAH?',
      'Como lidar com o burnout?',
      'Dr. Méndes e Silva atende crianças?',
      // ... adicione mais sugestões do seu blog e FAQ
    ];
    let suggestionIndex = 0;

    const typeSuggestion = (suggestion, charIndex) => {
      if (charIndex <= suggestion.length) {
        searchInput.placeholder = suggestion.substring(0, charIndex);
        setTimeout(
          () => typeSuggestion(suggestion, charIndex + 1),
          100
        );
      } else {
        setTimeout(() => clearSuggestion(suggestion), 2000);
      }
    };

    const clearSuggestion = (suggestion) => {
      const currentPlaceholder = searchInput.placeholder;
      const currentLength = currentPlaceholder.length;
      if (
        currentLength > 0 &&
        suggestion.substring(0, currentLength) === currentPlaceholder
      ) {
        searchInput.placeholder = '';
        setTimeout(() => {
          suggestionIndex = (suggestionIndex + 1) % suggestions.length;
          typeSuggestion(suggestions[suggestionIndex], 0);
        }, 500);
      } else {
        setTimeout(() => {
          suggestionIndex = (suggestionIndex + 1) % suggestions.length;
          typeSuggestion(suggestions[suggestionIndex], 0);
        }, 5000);
      }
    };

    const startTyping = () => {
      typeSuggestion(suggestions[suggestionIndex], 0);
    };

    startTyping();

    return () => {
      // Limpar timeouts se necessário
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-2'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <Link href="/">
            <h1
              className={`font-serif text-gray-900 cursor-pointer transition-all duration-300 text-center ${
                scrolled ? 'text-xl' : 'text-2xl'
              }`}
            >
              Dr. Méndes e Silva
            </h1>
          </Link>
        </div>
        {/* Barra de Pesquisa/Chatbot - aparece ao rolar a página */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl transition-all duration-300 ${
            scrolled ? 'opacity-100 top-16' : 'opacity-0 -top-full'
          }`}
        >
          <div ref={searchRef} className="relative mx-6">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
              aria-hidden="true"
              focusable="false"
            />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none focus:ring-2 focus:ring-gray-200 focus:outline-none placeholder-gray-400 rounded-none"
              placeholder="Como posso ajudar?"
              aria-label="Pesquisar"
              // Adicionar aqui a lógica para o chatbot
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;