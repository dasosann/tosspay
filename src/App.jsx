import { useState } from 'react'
import viteLogo from '/vite.svg'
import SelectMenu from './pages/SelectMenu';
import './App.css'
import {PaymentCheckoutPage} from '../src/pages/TossPayment'
function App() {

  return (
      <div>
        <SelectMenu/>
        <PaymentCheckoutPage/>
        
      </div>
      
  )
}

export default App
