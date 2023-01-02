import { useState } from "react";

const ExpenseForm = () => {
  const [entry, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);

    if (e.target.name === "entry") setTitle(e.target.value);
    if (e.target.name === "date") setDate(e.target.value);
    if (e.target.name === "amount") setAmount(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="entry">entry </label>
        <input value={entry} onChange={handleChange} name="entry" type="text" />
      </div>
      <div>
        <label htmlFor="amount">Amount </label>
        <input
          value={amount}
          onChange={handleChange}
          name="amount"
          type="number"
        />
      </div>
      <div>
        <label htmlFor="date"> Date </label>
        <input value={date} onChange={handleChange} name="date" type="date" />
      </div>
      <button type="submit"> Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
