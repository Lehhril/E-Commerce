import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="">
      <header>
        <Header/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;