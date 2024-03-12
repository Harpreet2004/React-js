import { cloneElement, useState } from 'react'

function App() {
  const [color, setColor] = useState("#90C3C8")

  return (
    <div className='w-full h-screen py-10' style={{backgroundColor:color, textAlign:'center',fontSize:30,fontFamily:'cursive',color:'black',fontWeight:'bold'}}>Background Changer
    
    <div className='fixed flex flex-wrap justify-center inset-x-0 px-2  top-1/3'>
      <div className='flex flex-wrap justify-center gap-3 rounded-md shadow-lg px-3 py-3 bg-slate-600'>
      <button className='p-4 rounded-lg' style={{backgroundColor:'red',margin:10,color:"#fff",fontSize:17}} onClick={() => setColor("red")}>Red</button> 
      <button className='p-4 rounded-lg' style={{backgroundColor:'green',margin:10,color:"#fff",fontSize:17}}onClick={() => setColor("Green")}>Green</button>
      <button className='p-4 rounded-lg' style={{backgroundColor:'blue',margin:10,color:"#fff",fontSize:17}}onClick={() => setColor("Blue")}>Blue</button>
      <button className='p-4 rounded-lg' style={{backgroundColor:'white',margin:10,color:"#000",fontSize:17}} onClick={() => setColor("White")}>White</button>
      <button className='p-4 rounded-lg' style={{backgroundColor:'#ef798a',margin:10,color:"#000",fontSize:17}} onClick={() => setColor("#ef798a")}>Pink</button>
      </div>
    </div>
    
    </div>

  )
}

export default App
