
import './App.css'
import Card from './components/Card'

function App() {

  let obj = {
    username : "Boiya"
  }

  let arr = [1,2,2,3];

  return (
    <>
    <h1 className='bg-green-400 mb-4'>Tailwind Test</h1>
   <Card username = {arr} text='Click Me!'/>
   <Card username = {obj.username}/>

    </>
  )
}

export default App
