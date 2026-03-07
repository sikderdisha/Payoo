document.getElementById("btn-cashOut").addEventListener('click',function(){
    //1.get the agent number and validation
    const cashOutNumber = getValueFromInput("agent-number");
  if (cashOutNumber.length != 11) {
    alert("invalid number");
    return;
  }
  else{
      console.log(cashOutNumber);

 }

//2.get the amount & validate 
const amountInfo =  getValueFromInput("amount");

 //3.get the current balance ,validate & covert to number
     const balanceInfo = getValueFromInput("balance");
 
     //4.calculate new balance
     const newBalance = Number(currentBalance) - Number(amount);
   
     //4.1:validation
     if(newBalance < 0){
         alert("Invalid Amount");
         return;
     }
     //5.get the PIN and verify
const pin = getValueFromInput("pin");
if(pin == '1234'){
    alert("CashOut Successful.");
     //set new balance to current balance
         balanceInfo.innerText=newBalance;
}
else{
    alert("Invalid PIN.");
    return;
}
 
})
















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