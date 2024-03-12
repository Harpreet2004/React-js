import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Strr from './Strr.jsx'

//custom way to define the function
// at the end of the day react transpiler converts the html to an js object and
// it has its own props and way of handling props (type,src,etc)

// function MyApp() {
//   return (
//     <h1>EERER</h1>
//   )
// }

const ReactElement = React.createElement(
    'a',
    {href: "https://google.com",target:"_blank"},
    "Click me boisss!"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <Strr />
    <App />
    <MyApp /> */}
    {ReactElement}
  </>
)
