import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './Header'
import Payment from './Components/Payment'
import Amount from './Components/Amount'

ReactDOM.render(
  <React.StrictMode>
    <Header />,
    <Payment/>,
    <Amount/>,
  </React.StrictMode>,
  document.getElementById('root')
)
