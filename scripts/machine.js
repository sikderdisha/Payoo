//console.log("Machine Added");

//machine id -> input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

 //get the amount
function getBalance(){
    const balanceInfo = document.getElementById("balance");
    const balance = balanceInfo.innerText;
    console.log("Current balance: ",Number(balance));
    return Number(balance);

}

//id > hide all sections except that one i clicked
function showOnly(id){
  console.log('show only clicked.')
  //get the id's
const addMoney = document.getElementById("add-money");
const payments = document.getElementById("latest-payment");
const cashOut =document.getElementById("cash-out");

//make all section hidden
addMoney.classList.add('hidden');
cashOut.classList.add('hidden');

//remove hidden from clicked btn
//get id
const selectBtn = document.getElementById(id);
selectBtn.classList.remove('hidden');

}