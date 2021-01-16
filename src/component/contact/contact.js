import React, { Component } from 'react';
import './contact.css';
  export default class Contact extends Component {
        render() {
            return (
                  <form className='contact'>
                  <label >name</label>
                  <input/>
                  <label>Email</label>
                  <input/>
                       <div className='p-change'>
                       <p className='p-change'><i class="fas fa-envelope-square">
                       <a href='barbarotrabajo@gmail.com'>
                       <p><a className='nav' 
                       href="mailto:barbarotrabajo@gmail.com?subject= Hey Barbaro, I'm interested in hearing from you! "
                       target='_black'>Email</a>
                       </p></a></i></p></div>

                       <div className='p-change'>
                       <p className='p-change'>
                       <i class="fab fa-github"><p>
                       <a className='nav' href="https://github.com/barbaroreyes "
                       target='_black'>Github</a>
                       </p></i></p></div>

                       <div className='p-change'>
                       <p className='p-change'>
                       <i class=" link fab fa-linkedin"><p>
                       <a className='nav' href='https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/'
                       target='_black'>linkedin</a>
                       </p></i></p></div>
            </form>
                    
            )
        }
    }
