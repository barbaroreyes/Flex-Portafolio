import React from 'react';
import './project.css';
import Robots from '../img/robots.PNG';
import Ecom from '../img/ecomerce.PNG'

function project() {
     return (
          <div>
         
      <section class="container flex text-center">
          <div class="columna">
              <h2>Robots-Friends</h2>
              <p> THIS  APP LOCATES YOUR FRIEND IN THE DATABASE </p>
              <img src={Robots} alt=""/>
              <a  class="btn" href="https://github.com/barbaroreyes/newT2">Github</a>
              <hr/>
              <a  class="btn" href="https://robotsapp.netlify.app/">WebSite</a>
          </div>
          <div class="columna">
                  <h2>E-Comerce</h2>
                  <p>A GREAT SHOP === LOW PRICES & FREE SHIPPING</p>
                  <img src={Ecom} alt=""/>
                  <a  class="btn" href="https://github.com/barbaroreyes/EcomerceCLone">Github</a>
                  <hr/>
                  <a  class="btn" href="https://hungry-einstein-27344a.netlify.app/">WebSite</a>
          </div>
          <div class="columna">
                      <h2>Table Three</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                           Et soluta molestiae enim</p>
                           <img src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                           <a  class="btn" href="#">Github</a>
                      <hr/>
                      <a  class="btn" href="#">WebSite</a>
                      
                      
          </div>
          <div class="columna">
                          <h2>Table Four</h2>
                          
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et soluta
                               molestiae enim</p>
                               <img src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>  
                               <a  class="btn" href="#">Github</a>
                               <hr/>
                               <a  class="btn" href="#">WebSite</a>
          </div>
      </section>
     </div>
     )
}

export default project