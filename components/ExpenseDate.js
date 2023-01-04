const ExpenseDate = ({ date }) => {
    const month = date.toLocaleString('en-US', { month: 'long' })           
    const year = date.getFullYear()
    const day = date.toLocaleString('en-US', { day: '2-digit' })
    return (
      <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
    )
  }
  
  export default ExpenseDate

  // props for passing data into through configure
  //components 
  //the approach of building a user interface from smaller buildingg blocks is called composition
  // 