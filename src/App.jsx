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
        <Welcome name =" Tuyết Nhi "/>
        <p>Tên: Đàm Tuyết Nhi </p>
        <p>Lớp: 26SPIT3 </p>
        <p>Ngày sinh: 6/2/2009 </p>
      </div>
    </>
  )
}

export default App
