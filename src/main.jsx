import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header'
import Payment from './Components/Payment'

ReactDOM.render(
  <React.StrictMode>
    <Header />,
    <Payment/>,
  </React.StrictMode>,
  document.getElementById('root')
)
