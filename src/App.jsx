import { useState } from 'react'
import NavBar from './Componentit/NavBar'
import './index.css';
import Main from './Componentit/Main';
import Vuokra from './Componentit/Vuokra';
import Mail from './Componentit/Mail';


function App() {

  return (
    <>
    <NavBar />
    <Main />
    <Vuokra />
    <Mail />
    </>
  )
}

export default App
