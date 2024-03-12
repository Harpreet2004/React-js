import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    
      <UserContextProvider >
        <h1>React with context api && Chai</h1>
        <Profile />
        <Login />
      </UserContextProvider>
    
  )
}

export default App
