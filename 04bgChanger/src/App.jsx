import { useState } from "react"

function App() {
 const [color, setColor] =useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>

      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"> 
  
        <button onClick={() => setColor("red")} className="outline-none px-4 rounded-xl" style={{backgroundColor:"red"}}>Red</button>
        {/* onclick needs a function not a return from a funtion thats why we dont use onclick = {setcolor("red")} */}

        <button onClick={()=> setColor("green")} className="outline-none px-4 rounded-xl" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={() => setColor("blue")} className="outline-none px-4 rounded-xl" style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={() => setColor("black")} className="outline-none px-4 rounded-xl text-white" style={{backgroundColor:"black"}}>Black</button>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
