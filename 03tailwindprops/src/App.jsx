import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let MyObj = {
    userNmae: 'Diksha',
    title: 'gupta'
  }

  let MyArray = [1,2,3,4]
  return (
    <>
     <h1 
       className='bg-blue-500 border-collapse text-white p-3 rounded-lg'
     >Tailwind Test
     </h1>

     <Card userName="chaiourcode" btnText="Click me"/>

     <Card userName="Diksha Gupta" btnText="Visit Me"/>

     <Card userName="Simran Gupta"/>
    
    </>
  )
}

export default App
