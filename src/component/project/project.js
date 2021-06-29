import React from 'react';
import './project.css';
import Robots from '../img/robots.png';
import Ecom from '../img/ecomerce.png';
import Logo from '../img/logo192.png'
import Dog from '../img/do.png';
import Mp from '../img/Media_player.png'

function project() {
     return (
          <div>
         
      <section class="container flex text-center">
          <div class="columna">
              <h2>Robots-Friends</h2>
              <p> THIS  APP LOCATES YOUR FRIEND IN THE DATABASE </p>
              <h2>Skyll:</h2>
              <img style={{width:'80px'}} src={Logo} alt=""/>
              <img src={Robots} alt=""/>
             <a  class="btn" href="https://github.com/barbaroreyes/newT2">Github</a>
              <hr/>
              <a  class="btn" href="https://master.dvyvkfnmu8g3u.amplifyapp.com/">WebSite</a>
          </div>
          <div class="columna">
                  <h2>E-Comerce</h2>
                  <p>A GREAT SHOP === LOW PRICES & FREE SHIPPING</p>
                  <h2>Skyll:</h2>
                  <img style={{width:'80px'}} src={Logo} alt=""/>
                  <img src={Ecom} alt=""/>
                  <a  class="btn" href="https://github.com/barbaroreyes/EcomerceCLone">Github</a>
                  <hr/>
                  <a  class="btn" href="https://hungry-einstein-27344a.netlify.app/">WebSite</a>
          </div>
          <div class="columna">
                 <h2>Dog App</h2>
                 <p>You can Added you favorite Pet</p>
                <h2>Skyll:React Heroku MongoDB/</h2>
                <img src={Dog} alt=""/>
                <a class="btn" href="https://github.com/barbaroreyes/dogs-app-frontend/tree/main">Github</a>
                <hr/>
               start <a  class="btn" href="https://main.d20zwbvpcwy8fb.amplifyapp.com/">WebSite</a>
          </div>
          <div class="columna">
             <h2>MegaPlayer App</h2>
             <p>App to wacht you favorites movies </p>
             <h2>Skyll:</h2>
             <img src={Mp} alt=""/>  
             <a  class="btn" href="https://github.com/barbaroreyes/app-m-player/tree/main">Github</a>
             <hr/>
             <a  class="btn" href="=https://main.d1t4o2etqu2abr.amplifyapp.com/">WebSite</a>             
          </div>
      </section>
     </div>
     )
}

export default project
