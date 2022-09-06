import React from 'react';
import Home from './components/Home/Home.jsx';
import Skills from './components/Skills/Skills.jsx';
import Services from './components/Services/Services.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import './App.css';

function App() {
  return (
    <main>
      <Home/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App
