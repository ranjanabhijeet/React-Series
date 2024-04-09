
import Chai from "./chai"

function App() {
  const  username = " Chai Aur Code "

  return (
                       // ----------Technically you can return only 1 element but if you want to return more element then
                       //  you can use fragments ( <>  </> ) -------------   
    <>
    <Chai/> 
    <h1> Chai aur react  {username}</h1>
    <p>test paragraph</p>
    </>                  
  )
}

export default App
