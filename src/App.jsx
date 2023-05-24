// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListComtainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <Navbar/>
      <ItemListComtainer greetin={'Bienvenido'}/>
    </>
  )
}

export default App
