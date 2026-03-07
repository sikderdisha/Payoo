console.log("js connected");

//login
document.getElementById("btn-login").addEventListener("click", function () {
  //get the mobile number
  const mobile = document.getElementById("input-number");
  const mobileInfo = mobile.value;
  console.log(mobileInfo);

  //get the pin number
  const pinInput = document.getElementById("pin");
  const getPin = pinInput.value;
  console.log(getPin);

  //match the input
  if (mobileInfo == "01543896583" && getPin == "1234") {
    alert("login success");

    //home page
    window.location.assign("./homePage.html");
  } else {
    alert("login failed");
  }
});
