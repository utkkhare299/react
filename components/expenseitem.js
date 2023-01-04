import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = ({ amount, date, title }) => {
  const [newAmount, setNewAmount] = useState(amount);
  const handleClick = () => {
    setNewAmount(100);
  };

  return (
  
  
      <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
         <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  )
};
export default ExpenseItem;
