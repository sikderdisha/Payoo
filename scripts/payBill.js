document.getElementById("btn-billPay").addEventListener('click',function(){
    //select service
    const selectService = getValueFromInput("service");

    //validation
    if(selectService == 'Select Service'){
        alert("Please select service type.");
        return;
    }
    else {
    console.log("Service Type: ", selectService);
  }

    //select bill provider
    const billProvider = getValueFromInput("biller");


    //validation
    if(billProvider == 'Select'){
        alert("Please select provider.")
    }
    else{
        console.log('Provider name : ',billProvider);
    }

    //get account number
    const userAccount = getValueFromInput("user-account-number");

    //validation
    if (userAccount.length < 11 || userAccount.length > 16) {
    alert("Invalid account number");
    return;
  }

    //3.get the current balance
  const currentBalance = getBalance();

  //4.get amount
  const PayMoney = getValueFromInput("bill-amount");


    //calculate new amount
    //5.new amount
  const updateAmount = currentBalance - Number(PayMoney);

   if (updateAmount < 0) {
    alert("Invalid Amount");
    return;
  } else {
    console.log("New balance: ", updateAmount);
  }

  ///5.get the PIN and verify
  const pin = getValueFromInput("bill-pin");
  if (pin == "1234") {
    alert("Bill paid Successfully.");

     //transaction history
    //1.get transaction section
const history = document.getElementById("transaction-container");
    //2.create new div
    const newElement = document.createElement('div');

     //3.add innerText in new div
    newElement.innerHTML= `
    <div class="p-3 my-3 bg-base-200 rounded-xl">
  <p>${PayMoney} paid successfully form your account.</p>
  <p>Account no: ${userAccount}</p>
  <p>Service Type: ${selectService}</p>
  <p class="text-xs text-gray-500">${new Date()}</p>
</div>
    `

     //4.new div append on transaction history
     history.append(newElement);
    //set new balance to current balance
    document.getElementById("balance").innerText = updateAmount;
  } else {
    alert("Invalid PIN.");
    return;
  }
})