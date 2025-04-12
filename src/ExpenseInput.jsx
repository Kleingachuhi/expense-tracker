import React, { useState } from "react";
import App from "./App";
import TableInput from "./TableInput";
function Inputform({expenses, setExpenses}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    function handleClickSubmit(event){
        event.preventDefault()

        const newExpense = {
            expense: title,
            description: description,
            category: category,
            amount: amount,
            date: date
          };

          setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

        setTitle('');
        setDescription('');
        setCategory('');
        setAmount('');
        setDate('');
    }

    return(
    <>
         <input type="text"
          placeholder='Enter expense name'
          className='expense-input' 
         value={title}
         onChange={(event)=> setTitle(event.target.value)}        />
         <input type="text" 
         placeholder='Enter description here' 
         className='description-input'
         value={description}
         onChange={(event) =>setDescription(event.target.value)}
         />
         <input type="text"
          placeholder='Enter category'
           className='category-input'
           value={category}
           onChange={(event)=> setCategory(event.target.value)}
           />
        <input type="number"
        min="1000"
        max="100,000"
        step="1000"
         placeholder='Enter amount' 
         className='amount-input'
         value={amount}
         onChange={(event) => setAmount(event.target.value)}
         />
        <input type="date"
         className='date-input'
         value={date}
         onChange={(event) => setDate(event.target.value)}
         />
        <button className='submit-btn' 
         onClick={handleClickSubmit}>
    Submit
        </button> 
    </>
    );
}
export default Inputform;