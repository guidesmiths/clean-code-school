const bankAccount = {
  amount: 10,
  getBalance: () => console.log(`${bankAccount.amount} $`)
}

const isUnderBudget = () => amount <= 500

const transfer = () => {
  if(isUnderBudget()) {
    console.log("Mininum balance shuold be over 500");
  }

  amount = amount+creditAmount;
  bankAccount.getBalance();
}


const checkYourBalance = () => {
  if(isUnderBudget()) {
    console.log("amount should be over 500");
  }
  bankAccount.getBalance();
}
