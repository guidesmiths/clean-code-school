const bankAccount = {
  amount: 100
}

const transfer = () => {
  if(bankAccount.amount <= 500) {
    console.log("Mininum balance shuold be over 500");
  }

  bankAccount.amount -= 100;
}


const sendWarningMessage = () => {
  if(bankAccount.amount <= 500) {
    console.log("amount should be over 500");
  }
}
