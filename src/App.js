import './App.css';
import Header from './component/1-Header-Nav/container';
import  Main from './component/2-Sections/compo2';
import Project from './component/project/project';
import About from './component/about/about';
import Contact from './component/contact/contact'
import {Switch,Route} from 'react-router-dom'




function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path ='/'>
        <Header/>
        <Main/>
        </Route>
         <Route exact path ='/about'>
         <About/>
         </Route>
         <Route exact path ='/projects'>
         <Project/>
         </Route>
      <Route exact path ='/contact'>
      <Contact/>
      </Route>
      </Switch>
      
      </div>
  );
}

export default App;
