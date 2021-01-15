import React from 'react'
import Head from './header/header';
import Foot from './footer/footer';
import Main from './main/main';
import './container3.css'
function Footer() {
  return (
    <div className='container-3'>
      <Head/>
      <Foot/>
      <Main/>
      <Head/>
      <Foot/>
      <Main/>
    </div>
  )
}

export default Footer
