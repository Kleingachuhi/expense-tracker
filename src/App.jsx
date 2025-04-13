import React from 'react'
import { useState } from 'react'
import './App.css'
import Inputform from './ExpenseInput'
import TableInput from './TableInput'

function App() {

  const [expenses, setExpenses] = useState([
    {
      expense: "Rent",
      description: "Paid for March",
      category: "Housing",
      amount: "Ksh 30,000",
      date: "2023-03-01",
    },
    {
      expense: "Groceries",
      description: "Grocery shopping",
      category: "Food & Groceries",
      amount: "Ksh 5,000",
      date: "2023-03-02",
    },
    {
      expense: "Electricity Bill",
      description: "Monthly KPLC bill",
      category: "Utilities",
      amount: "Ksh 2,500",
      date: "2023-03-05",
    },
    {
      expense: "Internet",
      description: "Monthly subscription",
      category: "Utilities",
      amount: "Ksh 3,000",
      date: "2023-03-06",
    },
    {
      expense: "Transport",
      description: "Uber rides",
      category: "Transport",
      amount: "Ksh 2,000",
      date: "2023-03-07",
    },
    {
      expense: "Eating Out",
      description: "Dinner with friends",
      category: "Food & Groceries",
      amount: "Ksh 1,200",
      date: "2023-03-08",
    },
    {
      expense: "Gym Membership",
      description: "Monthly gym fee",
      category: "Fitness",
      amount: "Ksh 4,000",
      date: "2023-03-10",
    },
    {
      expense: "Grocery Shopping",
      description: "Weekly grocery shopping at the local supermarket",
      category: "Food & Groceries",
      amount: "Ksh 10,570",
      date: "2025-04-05",
    },
    {
      expense: "Internet Bill",
      description: "Monthly payment for internet service",
      category: "Utilities",
      amount: "Ksh 6,458.60",
      date: "2025-04-03",
    },
    {
      expense: "Coffee with Friends",
      description: "Afternoon coffee at the local café with friends",
      category: "Entertainment",
      amount: "Ksh 1,680",
      date: "2025-04-06",
    },
    {
      expense: "Car Fuel",
      description: "Full tank of gas for the car",
      category: "Transportation",
      amount: "Ksh 7,000",
      date: "2025-04-04",
    },
    {
      expense: "Movie Tickets",
      description: "Two tickets for the latest movie release",
      category: "Entertainment",
      amount: "Ksh 3,080",
      date: "2025-04-07",
    },

  ]);

  const [searchTerm, setSearchTerm] = useState('')

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  
  const filteredExpenses = expenses.filter((expense) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
  
    const matchesSearch =
      expense.expense.toLowerCase().includes(lowerCaseSearch) 
    return matchesSearch;
  });
  
  return (
    <>
    <header className='header'>Expense Tracker</header> 
    <div className='p-holder'>
    <p>Start taking control of you Expenses and life .Record, categorise and analyze your spending.</p>
    </div>
    <input type="search" 
    placeholder='🔍Search Expenses'
     className='search-input'
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
     />
    <div className='container'>
    <div className='left-form'>
   <div className='expense-header'>
    <h2>Add Expense</h2>
    <p className='p-tag'>Enter your expense details below</p>
    </div>
 <div>    
      <Inputform onAddExpense={addExpense} />

      </div>
    </div>
    <TableInput expenses={filteredExpenses} />

    </div>
    </>
  )
}

export default App
