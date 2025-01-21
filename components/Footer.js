import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Dr. Méndes e Silva
        </p>
        <p className="mt-2 text-sm text-gray-500">CRM 123456 - Psiquiatra</p>
      </div>
    </footer>
  );
};

export default Footer;