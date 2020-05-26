import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Title></Title>
     <About></About>
     <Skill></Skill>
     <Portfolio></Portfolio>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
