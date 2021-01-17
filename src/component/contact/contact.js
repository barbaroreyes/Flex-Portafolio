import React, { Component } from 'react';
import './contact.css';
  export default class Contact extends Component {
        render() {
            return (
                  <form type='submit'>
                  <div className='contact'>
                  <div className ='contact-1'>
                  <label>Name:</label>
                  <input type='text' name='name' required/>
                  <label>Email:</label>
                  <input type='text'  required/>
                  <label>Message:</label>
                  <textarea rows="6" cols="22" required></textarea>
                  <button className='nav' type="submit">Submit</button>
                  </div>
                  </div>
               
                       <div className='p-change'>
                       <p className='p-change one'><i class="fas fa-envelope-square">
                       <a href='barbarotrabajo@gmail.com'>
                       <p><button><a className='nav' 
                       href="mailto:barbarotrabajo@gmail.com?subject= Hey Barbaro, I'm interested in hearing from you! "
                       target='_black'>Email Me</a></button>
                       </p></a></i></p></div>

                       <div className='p-change'>
                       <p className='p-change one'>
                       <i class="fab fa-github"><p>
                       <button><a className='nav' href="https://github.com/barbaroreyes " target='_black'>Github</a></button>
                       </p></i></p></div>

                       <div className='p-change  '>
                       <p className='p-change one '>
                       <i class=" link fab fa-linkedin"><p>
                       <button><a className='nav' href='https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/'
                       target='_black'>linkedin</a></button>
                       </p></i></p></div>
            </form>
                    
            )
        }
    }
