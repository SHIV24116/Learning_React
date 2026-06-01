import React from 'react'
import ReactDOM from 'react-dom/client'
 
import App from './App.jsx'


const anothervariable="shiv"
const reactElement=React.createElement(  //react gives a method to create elements but it requires predefined parameters in predefined format
  'a',
  {href:'https://google.com',target: '_blank'},
  'Click me to visit google',
  <br/>,
  anothervariable    ///here we insert evaluated variables
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {reactElement}
  </React.StrictMode>,
)
