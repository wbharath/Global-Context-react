import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './Modal'
import Home from './Home'
import Sidebar from './Sidebar'
function App() {
  

  return (
    <>
      <Home />
      <Modal />
      <Sidebar/>
    </>
  )
}

export default App
