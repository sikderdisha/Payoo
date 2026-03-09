document.getElementById("btn-Confirm").addEventListener("click", function () {

  // get receiver account number
  const receiverNumber = getValueFromInput("receiver-number");

  // validation for phone or bank account
  if (
    receiverNumber.length === 11 ||
    (receiverNumber.length >= 12 && receiverNumber.length <= 16)
  ) {
    console.log("Valid receiver account");
  } else {
    alert("Invalid phone or account number");
    return;
  }

  // get amount
  const sendAmount = getValueFromInput("send-amount");

  // amount validation
  if (sendAmount <= 0) {
    alert("Invalid amount");
    return;
  }

  // current balance
  const currentBalance = getBalance();

  // set new balance
  const newBalance = currentBalance - sendAmount;

  // validation of balance
  if (newBalance < 0) {
    alert("Do not have sufficient balance.");
    return;
  }

  console.log("New balance:", newBalance);

  //validation of pin
  const pin = getValueFromInput("send-pin");
  if (pin == "1234") {
    alert("Transfer money Successfully.");

     //transaction history
    //1.get transaction section
const history = document.getElementById("transaction-container");
    //2.create new div
    const newElement = document.createElement('div');

     //3.add innerText in new div
    newElement.innerHTML= `
    <div class="p-3 my-3 bg-base-200 rounded-xl">
  <p>${sendAmount} Taka transfer successfully from your account to</p>
  <p>Account no: ${receiverNumber}</p>
  <p class="text-xs text-gray-500">${new Date()}</p>
</div>
    `

     //4.new div append on transaction history
     history.append(newElement);
    //set new balance to current balance
    document.getElementById("balance").innerText = newBalance;
  } else {
    alert("Invalid PIN.");
    return;
  }

});