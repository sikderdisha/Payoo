document.getElementById("btn-addMoney").addEventListener('click',function(){
    //console.log('add money button clicked');

    //1.get the bank
    const SelectBankAccount =getValueFromInput("add-money-bank");
    //console.log(SelectBankAccount);

    //1.1 validation
    if(SelectBankAccount == 'Select back'){
        alert('Please select the bank.');
        return;
    }
    else{
console.log("Bank name: ",SelectBankAccount);
    }

    //2.get the account number
    const accountNumber =getValueFromInput("account-number");
    

    //2.1 validation
    if(accountNumber.length <12 || accountNumber.length > 16){
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
    const pin = getValueFromInput("pin");

    //6.1validation
    if(pin == '1234'){
        alert("$" + AddMoney + " added successfully to your account.");
        //6.2.set new amount to current amount
        document.getElementById("balance").innerText=newAmount;
    }
    else{
        alert('Invalid pin.');
        return;
    }
})