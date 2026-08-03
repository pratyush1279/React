import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let arr = [1, 2, 3]
  return (
    <>
    
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
      Tailwind Test</h1>
      <Card username = "chaiaurcode" btnText = "Click me" content = "Hello all of you. This is my new channel"/>
      <Card username = "pratyush" btnText = "Visit me" content = "Hello I'm Pratyush"/>
    </>
  )
}

export default App
