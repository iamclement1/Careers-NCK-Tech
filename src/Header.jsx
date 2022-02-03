import { useState } from 'react'
import './App.css'
import Profile from './assets/profile.png'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className="App p-12 pb-0 font-BaiJamjuree">
      <nav className='flex md:justify-end pb-8'>
        <ul className='flex md:flex-row flex-col justify-center md:justify-end text-gray-700 space-x-7 font-semibold items-center text-xl cursor-pointer'>
          <li className='sm:mr-10'>TRIP</li>
          <li className='sm:mr-10'>RECENTLY VIEWED</li>
          <li className='sm:mr-10'>BOOKED</li>
          <li className='m-2'>
            <img className='h-12' src={Profile} alt="" />
          </li>
        </ul>
      </nav>
      <hr/>
    </div>
  )
}

export default Header