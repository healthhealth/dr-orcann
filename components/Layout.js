import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BottomBar from './BottomBar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <BottomBar />
      <Footer />
    </div>
  );
};

export default Layout;