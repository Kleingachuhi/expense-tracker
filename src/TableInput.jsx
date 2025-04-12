import {useState} from "react";
import App from "./App";
import Inputform from "./ExpenseInput";
function TableInput (){
    const expenses = [
        {
          expense: 'Grocery Shopping',
          description: 'Weekly grocery shopping at the local supermarket',
          category: 'Food & Groceries',
          amount: 'Ksh 10,570',
          date: 'April 5, 2025',
        },
        {
          expense: 'Internet Bill',
          description: 'Monthly payment for internet service',
          category: 'Utilities',
          amount: 'Ksh 6,458.60',
          date: 'April 3, 2025',
        },
        {
          expense: 'Coffee with Friends',
          description: 'Afternoon coffee at the local café with friends',
          category: 'Entertainment',
          amount: 'Ksh 1,680',
          date: 'April 6, 2025',
        },
        {
          expense: 'Car Fuel',
          description: 'Full tank of gas for the car',
          category: 'Transportation',
          amount: 'Ksh 7,000',
          date: 'April 4, 2025',
        },
        {
          expense: 'Movie Tickets',
          description: 'Two tickets for the latest movie release',
          category: 'Entertainment',
          amount: 'Ksh 3,080',
          date: 'April 7, 2025',
        },
      ];
    return(
<>
<table className="right-table">
  <thead>
    <tr className="headers">
      <th>Expense</th>
      <th>Description</th>
      <th>Category</th>
      <th>Amount</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
  {expenses.map((expense, index) => (
    <tr key={index}>
      <td>{expense.expense}</td>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>{expense.amount}</td>
      <td>{expense.date}</td>
    </tr>
  ))}
 
  </tbody>
</table>
</>
    );
};

export default TableInput;