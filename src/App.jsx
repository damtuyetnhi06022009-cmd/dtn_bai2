import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card-title'>
        <Welcome name ="26SPIT3"/>
      </div>
    </>
  )
}

export default App
