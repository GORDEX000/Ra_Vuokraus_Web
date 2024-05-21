import { useState } from 'react'
import NavBar from './Componentit/NavBar'
import './index.css';
import Main from './Componentit/Main';
import Vuokra from './Componentit/Vuokra';
import Mail from './Componentit/Mail';
import Footer from './Componentit/Footer';
import Map from './Componentit/Map';
import Calendar from './Componentit/calender';

function App() {

  return (
    <>
    <NavBar />
    <Main />
    <Vuokra />
    <Calendar />
    <Mail />
    <Map/>
    <Footer />
    </>
  )
}

export default App
