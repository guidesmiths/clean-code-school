const bankAccount = {
  amount: 100
};

const transfer = () => {
  if (bankAccount.amount <= 0) {
    console.log("Mininum balance shuold be over 0");
  }

  bankAccount.amount -= 100;
  console.log(`${bankAccount.amount} €`);
};

const checkYourBalance = () => {
  if (bankAccount.amount <= 0) {
    console.log("amount should be over 0");
  }
  console.log(`${bankAccount.amount} €`);
};
