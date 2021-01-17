import React from 'react' ;
import work from '../../img/work.jpg'

function Main() {
  return (
    <section>
    <div  className='container-box-2'>
          <img style={{width:'250px'}}  alt ='' src={work}/>
          <p className='parraph'><i class="fab fa-html5">
          </i>HTML/CSS<i className=" fab fa-css3-alt">
          </i>|JavaScript<i class="fab fa-node-js">
          </i>|React-Redux<i class="fab fa-react"></i>|
          </p>
          <hr className='line'/>
          <h3>you don't climb the mountain you never got to </h3>
         <button >Contact</button>
          <div className='socials-liks'>
           <a className ='link' href="https://www.linkedin.com/in/barbaro-reyes-b023aa1a7/" 
               rel='noopener noreferrer' target='_black'><i 
               className=" fab fa-linkedin"></i></a>
           <a className ='link' href="https://github.com/barbaroreyes" 
              rel='noopener noreferrer'
              target='_black'><i className=" link fab fa-github-square"></i></a>
           <a className ='link'href="http://google.com"
              rel='noopener noreferrer' target='_black'>
             <i className="  fab fa-facebook-square"></i></a>
          </div>
          
          <hr className='line'/>
          
      </div>
   </section>
  )
}

export default Main
