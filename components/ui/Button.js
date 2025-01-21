import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-gray-800 text-white px-6 py-3 hover:bg-gray-700 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;