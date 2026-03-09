document.getElementById("btn-apply-coupon").addEventListener('click',function(){
    //get the coupon-code
    const getBonus = getValueFromInput("coupon-code");

    //get current balance
     const currentBalance = getBalance();

    //declare variable to store amount
    let bonus = 0;
//  conditions
    if(getBonus === "WELCOME50"){
        bonus = 50;
    }
    else if(getBonus === "DISHA100"){
        bonus = 100;
    }
    else if (getBonus === "NEWUSER25") {
    bonus = 25;
  } 
   else {
    alert("Invalid Coupon");
    return;
  }

  //calculate balance
  const NewBalance = currentBalance + Number(bonus);

  document.getElementById("balance").innerText = NewBalance;

  alert(`Bonus ${bonus} Tk added successfully!`);

})