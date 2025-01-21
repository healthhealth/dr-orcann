import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="#contact" className="text-gray-900 hover:text-gray-600 transition-colors duration-300 text-sm font-light tracking-wide">
            Fale Conosco
          </Link>
          <div className="h-4 w-px bg-gray-300"></div>
          <Link href="https://wa.me/5511988888888" className="text-gray-900 hover:text-gray-600 transition-colors duration-300 text-sm font-light tracking-wide">
            Agendar Consulta
          </Link>
        </div>
      </div>
    </div> // <-- Tag </div> adicionada aqui
  );
};

export default BottomBar;