import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import ContactMe from './Pages/ContactMe';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

class App extends React.Component{
  render(){
    return (
      <div className="my-portfolio">
        <Navbar />
        <About dark={false} id="about" />
        <Projects dark={true} id="projects-container" />
        <Skills dark={true} id="skills-container" />
        <ContactMe dark={false} id="contact-container" />
      </div>
    );
  }
}

export default App;
