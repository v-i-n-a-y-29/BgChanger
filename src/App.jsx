import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('grey')

  return (
    <>
      <div className="h-screen flex items-end justify-center bg-gradient-to-br py-5"
      style={{backgroundColor:color}}>
        <div className="flex gap-6 bg-white/20 backdrop-blur-sm shadow-xl border border-white/30 px-6 py-3 rounded-full">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 border border-red-800" onClick={()=>setColor('red')}>Red</button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 border border-green-800" onClick={()=>setColor('green')}>Green</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 border border-blue-800" onClick={()=>setColor('blue')}>Blue</button>
          <button className="bg-yellow-300 hover:bg-yellow-500 text-white font-semibold px-5 py-2 rounded-full transition duration-300 shadow-md hover:scale-105 border border-yellow-800" onClick={()=>setColor('yellow')}>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
