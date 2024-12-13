import { useState } from 'react'

function CounterApp(){
const [counter, setCounter] = useState(0)

const addValue = ()=>{
  if(counter < 20){
    // setCounter(counter + 1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=> prevCounter+1)
  }
}

const removeValue = ()=>{
  if(counter > 0){
    setCounter(counter - 1)
  }
}

  return(
    <>
    <h1>Chai our code</h1>
    <h3>Counter Value is :{counter}</h3>
    <button
    onClick={addValue}
    >Add Value</button>
    <br/>
    <br/>
    <button
    onClick={removeValue}
    >Remove Value</button>
    </>
  )
}

export default CounterApp