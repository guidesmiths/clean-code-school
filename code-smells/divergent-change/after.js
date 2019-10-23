
function renderCard (id) {
  const container = document.getElementById(id);
  container.innerHTML = `
    <div class="ui raised card">
      <div class="content">
        <div class="header">Balance: ${this.getBalance()}</div>
        <div class="meta">
          <span class="category">Money: ${this.getMoney()}</span>
        </div>
        <div class="description">
          <p></p>
        </div>
      </div>
    </div>
  `;
};

const Account = info => {
  let money = info.money;
  let balance = info.balance;

  const getBalance = () => balance;
  const getMoney = () => money;

  const addMoney = ammout => money = ammout + money;

  const addBalance = ammout => balance = ammout + balance;

  const renderHtml = id => renderCard.call({
    getBalance,
    getMoney,
  }, id);

  return { getBalance, getMoney, addMoney, addBalance, renderHtml };
};


export default Account;
