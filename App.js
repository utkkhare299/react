import "./Expenseitem.css";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesFilter from "./components/ExpensesFilter";
import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: "Local Mall",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    locationOfExpenditure: "Local Mall",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
    locationOfExpenditure: "Car Repair",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpenditure: "Furniture Store",
  },
];
export default function App() {
  const newExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [filteredYear, setFilteredYear] = useState("2020");

  const saveExpenseDataHandler = (data) => {
    const expenseData = { ...data, id: Math.random().toString() };

    console.log(newExpenses);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = newExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No Expenses found....</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

      <main className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
        {filteredExpenses.length === 1 && (
          <p>Only single Expense here. Please add more..</p>
        )}
      </main>
    </>
  );
}
