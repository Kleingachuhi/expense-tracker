import React from 'react'
import { useState } from 'react'
import './App.css'
import Inputform from './ExpenseInput'
import TableInput from './TableInput'

function App() {
const [expenses, setExpenses] =useState([])
  return (
    <>
    <header className='header'>Expense Tracker</header> 
    <div className='p-holder'>
    <p>Start taking control of you Expenses and life .Record, categorise and analyze your spending.</p>
    </div>
    <input type="search" placeholder='🔍Search Expenses' className='search-input'/>
    <div className='container'>
    <div className='left-form'>
   <div className='expense-header'>
    <h2>Add Expense</h2>
    <p className='p-tag'>Enter your expense details below</p>
    </div>
    <form className='details-input'> 
 <div>    
      <Inputform  />
      </div>
    </form>
    </div>
    <TableInput  />
    </div>
    </>
  )
}

export default App
