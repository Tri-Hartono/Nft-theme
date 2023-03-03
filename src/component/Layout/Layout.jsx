import React from 'react';
import LayoutRouters from '../../routes/Routers';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <LayoutRouters />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
