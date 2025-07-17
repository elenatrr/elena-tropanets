import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css'; 
import ToggleTheme from '../components/ToggleTheme';

const Layout = () => {
  return (
    <div className='layout'>
      <ToggleTheme/>
      <div className='layout-inner'>
        <Header/>
        <main className='main'>
          <Outlet />
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;