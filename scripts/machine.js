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