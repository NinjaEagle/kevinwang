import React from 'react';
import './sass/mystyles.scss'
// import Header from './header/Header';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import ContactMe from './Pages/ContactMe';
import Data from './Projects/Data.js';
import Skills from './Pages/Skills';
import Welcome from './Pages/Welcome';


class App extends React.Component{
  render(){
    return (
      <div className="my-portfolio">
        <Navbar />
        <Welcome dark={true} id="welcome"/>
        <About dark={false} id="about-container" />
        <Skills dark={true} id="skills-container" />
        <Data dark={true} id="projects-container" />
        <ContactMe dark={true} id="contact-container" />
      </div>
    );
  }
}

export default App;
