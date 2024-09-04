import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Navbar/Navbar'
import { Contact } from './components/contact'
import {Skills} from './components/Skill'
import { Home } from './components/Home'
import { About } from './components/About'
import { Certificates } from './components/Certificates'
import { Project } from './components/projectcardcomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Navbar />
      <About/>
      <Skills/>
      <Project/>
      <Certificates/>
      <Contact/>
    </div>
    </>
  )
}

export default App
