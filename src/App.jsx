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
        <Student name =" Đàm Tuyết Nhi "/> 
        <Student age="16"/>
        <Student class="26SPIT3"/>
      </div>
    <br />
      <div className='card-title'>
        <Student name =" Đàm Tuyết Nhi "/> 
        <Student age="16"/>
        <Student class="26SPIT3"/>      
        </div>
    <br />
      <div className='card-title'>
        <Student name =" Đàm Tuyết Nhi "/> 
        <Student age="16"/>
        <Student class="26SPIT3"/> 
        </div>
    </>
  )
}

export default App
