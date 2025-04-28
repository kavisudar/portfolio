import './App.css';
import Cursor from './Component/Cursor';
import React from 'react';
import Nav from './Component/Nav';
import Skill from './Component/Skill';
import Home from './Component/Home';
import Project from './Component/Project';
import Contact from './Component/Contact';

function App() {
  return (
    <>
    <Nav/>
    <Home/>
    <Skill/>
    <Project/>
    <Contact/>
    <Cursor/>
    </>
  );
}

export default App;
