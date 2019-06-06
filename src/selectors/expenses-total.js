

export default (expenses) => {
     
  //return      
//   expenses.reduce((accumulator, currVal.amount) =>
//  accumulator + currVal.amount, 0);

return expenses.reduce((accumulator, { amount }) => accumulator + amount, 0)
//  expenses.reduce((accumulator, value) => accumulator + value.amount, 0)

    };

// expenses
//     .map((expense)=> expense.amount)
// .reduce((accumulator, value) => accumulator + value, 0)

//Instructor's answer
//return expenses
//     .map((expense)=> expense.amount)
// .reduce((accumulator, value) => accumulator + value, 0)}



// expenses.reduce((accumulator, currVal.amount) =>
//  accumulator + currVal.amount, 0);
//  const newAmount = expenses ? amountTotal : 0;
//  return newAmount;