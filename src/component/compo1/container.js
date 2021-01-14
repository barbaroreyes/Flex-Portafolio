import React from 'react';
import Head from './header/header';
import Footer from './footer/footer';
import Main from './main/main';
import './compo1.css'

const Header = () => {
  return (
    <main className='container-1'>
    <Head/>
    <Main/>
    <Footer/>
    </main>
  )
}

export default Header
