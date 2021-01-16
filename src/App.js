import './App.css';
import Header from './component/1-Header-Nav/container';
import  Main from './component/2-Sections/compo2';
import Project from './component/project/project';
import About from './component/about/about';
import Contact from './component/contact/contact'





function App() {
  return (
    <div className="container">
      
      <Header/>
      <Main/>
      <About/>
      <Project/>
      <Contact/>
      </div>
  );
}

export default App;
