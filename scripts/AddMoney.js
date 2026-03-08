document.getElementById("btn-addMoney").addEventListener("click", function () {
  //console.log('add money button clicked');

  //1.get the bank
  const SelectBankAccount = getValueFromInput("add-money-bank");
  //console.log(SelectBankAccount);

  //1.1 validation
  if (SelectBankAccount == "Select back") {
    alert("Please select the bank.");
    return;
  } else {
    console.log("Bank name: ", SelectBankAccount);
  }

  //2.get the account number
  const accountNumber = getValueFromInput("account-number");

  //2.1 validation
  if (accountNumber.length < 12 || accountNumber.length > 16) {
    alert("Invalid account number");
    return;
  }

  //3.get the current balance
  const currentBalance = getBalance();

  //4.Add amount
  const AddMoney = getValueFromInput("add-money-amount");

  //5.new amount
  const newAmount = currentBalance + Number(AddMoney);
  console.log(newAmount);

  //6.get the pin
  const pin = getValueFromInput("add-pin");

  //6.1validation
  if (pin == "1234") {
    // alert("$" + AddMoney + " added successfully to your account from " + SelectBankAccount + "at " + new Date());

    alert(`
${AddMoney} Taka added successfully to your account
from ${SelectBankAccount}
at ${new Date()}
`);
    //transaction history
    //1.get transaction section
const history = document.getElementById("transaction-container");
    //2.create new div
    const newElement = document.createElement('div');

     //3.add innerText in new div
    newElement.innerHTML= `
    <div class="p-3 my-3 bg-base-200 rounded-xl">
  <p>${AddMoney} Taka added successfully</p>
  <p>from ${SelectBankAccount}</p>
  <p>Account no: ${accountNumber}</p>
  <p class="text-xs text-gray-500">${new Date()}</p>
</div>
    `

     //4.new div append on transaction history
     history.append(newElement);

    //6.2.set new amount to current amount
    document.getElementById("balance").innerText = newAmount;
  } else {
    alert("Invalid pin.");
    return;
  }
});
