document.getElementById("btn-cashOut").addEventListener("click", function () {
  //1- get the agent number & validate
  const cashOutNumber = getValueFromInput("agent-number");
  if (cashOutNumber.length != 11) {
    alert("invalid number");
    return;
  }

  //2.get the amount
  const cashOutAmount = getValueFromInput("amount");

  //3.get the current balance & covert to number
  const currentBalance = getBalance();

  //4.calculate new balance
  const newBalance = currentBalance - Number(cashOutAmount);

  //4.1:validation
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  } else {
    console.log("New balance: ", newBalance);
  }
  //5.get the PIN and verify
  const pin = getValueFromInput("pin");
  if (pin == "1234") {
    alert("CashOut Successful.");

     //transaction history
    //1.get transaction section
const history = document.getElementById("transaction-container");
    //2.create new div
    const newElement = document.createElement('div');

     //3.add innerText in new div
    newElement.innerHTML= `
    <div class="p-3 my-3 bg-base-200 rounded-xl">
  <p>${cashOutAmount} Taka withdraw successfully</p>
  <p>Account no: ${cashOutNumber}</p>
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

// document.getElementById("btn-cashOut").addEventListener('click',function(){
//     //1.get the agent number and validation
//  const cashOutInput = document.getElementById("agent-number");
//  const cashOut = cashOutInput.value;

//  //validation
//  if(cashOut.length != 11){
//     alert("Invalid Number.");
//     return;
//  }
//  else{
//      console.log(cashOut);

//  }

//     //2.get the amount & validate
// const amountInfo = document.getElementById("amount");
// const amount = amountInfo.value;
// console.log('Agent Number: ',amount);

// //3.get the current balance ,validate & covert to number
//     const balanceInfo = document.getElementById("balance");
//     const currentBalance =balanceInfo.innerText; //innerText:lement এর ভিতরের text নিতে হবে।
//     console.log('Current Balance: ',currentBalance);

//     //4.calculate new balance
//     const newBalance = Number(currentBalance) - Number(amount);

//     //4.1:validation
//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }
//     //console.log('New Balance: ',newBalance);

//     //5.get the PIN and verify
//     const pinInput=document.getElementById("pin");
//     const pin = pinInput.value;

//     //5.1.true>show alert>set new balance
//     if(pin == '1234'){
//         alert('Cash Out Successful.');
//         console.log('New Balance: ',newBalance);

//         //set new balance to current balance
//         balanceInfo.innerText=newBalance;

//     }

//     //5.2.false > error alert > return
//      else{
//         alert('Invalid PIN')
//         return;

//      }
// })
