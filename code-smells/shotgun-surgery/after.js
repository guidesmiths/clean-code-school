const bankAccount = {
  amount: 10,
  getBalance: () => console.log(`Your balance is ${bankAccount.amount} $`)
}

const isUnderBudget = () => bankAccount.amount <= 0;

const transfer = (toSend) => {
  if(isUnderBudget()) {
    console.log("Mininum balance shuold be over 0");
  }

  bankAccount.amount -=toSend;
  bankAccount.getBalance();
}


const checkYourBalance = () => {
  if(isUnderBudget()) {
    console.log("amount should be over 0");
  }
  bankAccount.getBalance();
}

checkYourBalance();
transfer(2);
