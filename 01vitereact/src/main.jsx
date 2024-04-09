import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me visit google",
// }
const anotherElement = (
    <a href="https://google.com"target='_blank'>Visit Google</a>

)
const anotherUser = "Chai Aur Code"

const reactElement = React.createElement(
  'a', 
  {href: 'http://google.com',target: '_blank' },
  'Click me to visit google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById("root")).render(
  // <MyApp /> /* We can also write in this way MyApp()*/

  reactElement


);
