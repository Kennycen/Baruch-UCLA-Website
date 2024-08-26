import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home Section/Home'
import Pillars from './components/Pillars Section/Pillars'
import About from './components/About Section/About'
import Event from './components/Event Section/Event'
import Culture from './components/Culture Section/Culture'
import Team from './components/Team Section/Team'
import Discord from './components/Discord Join/Discord'
import Footer from './components/Footer Section/Footer'


const App = () => {
  return (
  <div>
    <NavBar/>
    <Home/>
    <Pillars/>
    <About/>
    <Event/>
    <Culture/>
    <Team/>
    <Discord/>
    <Footer/>
  </div>
  )
}

export default App
