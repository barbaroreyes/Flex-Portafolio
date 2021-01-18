import React, { Component } from 'react';
import './contact.css';
  export default class Contact extends Component {
        render() {
            return (
                  <form type='submit' class='contact' >
                  <div class='contact'>
                  <div class ='contact-1'>
                  <label>Name:</label>
                  <input type='text' name='name' r/>
                  <label>Email:</label>
                  <input type='text'  required/>
                  <label>Message:</label>
                  <textarea rows="6" cols="22" ></textarea>
                  <button class='nav' type="submit">Submit</button>
                  </div>
                  </div>
               
                       <div class='p-change'>
                       <p class='p-change one'><i class="fas fa-envelope-square">
                       <a href='barbarotrabajo@gmail.com'>
                       <p><button><a class='nav' 
                       href="mailto:barbarotrabajo@gmail.com?subject= Hey Barbaro, I'm interested in hearing from you! "
                       target='_black'>Email Me</a></button>
                       </p></a></i></p></div>

                       <div class='p-change'>
                       <p class='p-change one'>
                       <i class="fab fa-github"><p>
                       <button><a class='nav' href="https://github.com/barbaroreyes " target='_black'>Github</a></button>
                       </p></i></p></div>

                       <div class='p-change  '>
                       <p class='p-change one '>
                       <i class=" link fab fa-linkedin"><p>
                       <button><a class='nav' href='https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/'
                       target='_black'>linkedin</a></button>
                       </p></i></p></div>
            </form>
                    
            )
        }
    }
