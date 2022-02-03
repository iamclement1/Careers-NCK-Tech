import { useState } from 'react'
import './App.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-12 pb-0  md:w-full">
      <nav className='flex justify-between text-lg font-mono pb-20 font-semibold'>
        <div></div>
        <div>
          <ul className='flex mr-12 text-gray-700 cursor-pointer'>
            <li className='mr-12'>TRIPS</li>
            <li className='mr-10'>RECENTLY VIEWED</li>
            <li>BOOKED</li>
          </ul>
        </div>
      </nav> 
      <hr/>
    </div>
  )
}

export default Header
