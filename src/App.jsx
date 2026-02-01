import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card-title'>
        <Student name =" Tuyết Nhi " age="16" birth="6/2/2009"/>
      </div>
    </>
  )
}

export default App
