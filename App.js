import "./Expenseitem.css";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseForm from "./components/ExpenseForm";
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
    date: new Date(2021, 2, 28),
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

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [newExpenses, setNewExpenses] = useState(expenses);

  const saveExpenseDataHandler = (data) => {
    const expenseData = { ...data, id: Math.random().toString() };
    setNewExpenses([...expenses, expenseData]);
    console.log(newExpenses);
  };

  return (
    <>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

      <main>
        <h1>Expense Items</h1>
        {
        expenses.map(expense => (
          <ExpenseItem key={expense.id} 
          title= {expense.title} 
          amount={expense.amount} 
          date={expense.date} />
        ))
      }
      </main>
    </>
  );
}
