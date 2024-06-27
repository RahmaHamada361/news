import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Section from './Component/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Section />
    </>
  )
}

export default App
