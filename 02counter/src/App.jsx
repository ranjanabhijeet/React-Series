import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 15 

  const addValue =() => {
    // console.log("clicked", counter);
    // counter = counter + 1
    /*
    setCounter(counter + 1)         This is not going to update 15+4 =19..This update only +1 and this is cosider everyone same              
    Setcounter(counter + 1);
    Setcounter(counter + 1);
    Setcounter(counter + 1);
    */

   setCounter(prevCounter => prevCounter +1 )
   setCounter(prevCounter => prevCounter + 1);     /*  Now You Can update +4 using prevcounter  because it takes previous value then updates +1 And +1 */
   setCounter(prevCounter => prevCounter + 1);
   setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    setCounter (counter-1)
  }
 

  return (
    <>
      <h1>CHAI aUR react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}> remove value {counter} </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
