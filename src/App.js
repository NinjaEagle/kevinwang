import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import ContactMe from './Pages/ContactMe';
import Projects from './Pages/Projects'

class App extends React.Component{
  render(){
  return (
    <div className="my-portfolio">
      <Navbar />
      <About id="about-me"/>
      <Projects id="projects-container"/>
      <ContactMe id="contact-container"/>
    </div>
  );
  }
}

export default App;
