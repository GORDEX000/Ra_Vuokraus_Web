import { useState } from 'react'
import NavBar from './Componentit/NavBar'
import './index.css';
import Main from './Componentit/Main';
import Vuokra from './Componentit/Vuokra';
import Mail from './Componentit/Mail';
import Footer from './Componentit/Footer';
import AboutSite from './Componentit/AboutSite';
import Map from './Componentit/Map';

function App() {

  return (
    <>
    <NavBar />
    <Main />
    <Vuokra />
    <Mail />
    <Map/>
    <AboutSite />
    <Footer />
    </>
  )
}

export default App
