const ExpenseDate = ({ date }) => {
    const month = date.toLocaleString('en-US', { month: 'long' })
    const year = date.getFullYear()
    const day = date.toLocaleString('en-US', { day: '2-digit' })
    return (
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
    )
  }
  
  export default ExpenseDate