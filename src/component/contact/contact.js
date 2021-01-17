import React, { Component } from 'react';
import './contact.css';
  export default class Contact extends Component {
        render() {
            return (
                  <form className='contact'>
                  
                  <div className='contact'>
                  <div className ='contact-1'>
                  <label>Name:</label>
                  <input type='text' name='name'/>
                  <label>Email:</label>
                  <input type='text'/>
                  <label>Message:</label>
                  <textarea></textarea>
                  <button className='nav' type="submit">Submit</button>
                  </div>
                  </div>
               
                       <div className='p-change'>
                       <p className='p-change'><i class="fas fa-envelope-square">
                       <a href='barbarotrabajo@gmail.com'>
                       <p><button><a className='nav' 
                       href="mailto:barbarotrabajo@gmail.com?subject= Hey Barbaro, I'm interested in hearing from you! "
                       target='_black'>email</a></button>
                       </p></a></i></p></div>

                       <div className='p-change'>
                       <p className='p-change'>
                       <i class="fab fa-github"><p>
                       <button><a className='nav' href="https://github.com/barbaroreyes " target='_black'>Github</a></button>
                       </p></i></p></div>

                       <div className='p-change'>
                       <p className='p-change'>
                       <i class=" link fab fa-linkedin"><p>
                       <button><a className='nav' href='https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/'
                       target='_black'>linkedin</a></button>
                       </p></i></p></div>
            </form>
                    
            )
        }
    }
