const bankAccount = {
  amount: 10
}

const isUnderBudget = () => amount <= 500

const transfer = () => {
  if(isUnderBudget()) {
    console.log("Mininum balance shuold be over 500");
  }

  amount = amount+creditAmount;
}


const sendWarningMessage = () => {
  if(isUnderBudget()) {
    console.log("amount should be over 500");
  }
}
