import { useState } from 'react'
import './App.css'
import Profile from './assets/profile.png'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-12 pb-0 font-BaiJamjuree">
      <nav className='md:flex block justify-between text-lg font-BaiJamjuree pb-20 font-semibold'>
        <div></div>
        <div>
          <ul className='flex mr-12 text-gray-700 cursor-pointer items-center sm:mx-auto sm:mr-4'>
            <li className='mr-12'>TRIPS</li>
            <li className='mr-10'>RECENTLY VIEWED</li>
            <li>BOOKED</li>
            <img src={Profile} alt="img" className='w-12 ml-12' />
          </ul>
        </div>
      </nav> 
      <hr/>
    </div>
  )
}

export default Header
