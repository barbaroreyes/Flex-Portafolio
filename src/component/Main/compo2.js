import React from './node_modules/react';
import Head from './header/header';
import Footer from './footer/footer';
import SectionMain from './main/main';
import './compo2.css'
    

function Main() {
  return (
    <div className='container-2'>
      <Head/>
      <SectionMain/>
      <Footer/>
    </div>
  );
}

export default Main;
