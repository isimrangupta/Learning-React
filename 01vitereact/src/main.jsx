import React from "react";
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}


// const ReactElement = {
//   type:'a',
//   props:{
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   Children: 'Click me to visit google'
// }


const aunterElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
  
)


const anotherUsername = "chai our React"

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click me to visit google',
  anotherUsername
)

ReactDom.createRoot(document.getElementById('root')).
render(

  ReactElement
  
 
)