import React from 'react';
import Head from './1-Hello/intro';
import Footer from './2-info/main';
import SectionMain from './3-About Me/footer';
import './compo2.css'
    

function Main() {
  return (
    <div className='container-2'>
      <Head/>
      <Footer/>
      <SectionMain/>
      
    </div>
  );
}

export default Main;
