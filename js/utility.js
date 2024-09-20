

function getInputValue (id){
  let inputValue = document.getElementById(id).value;
  let inputValueNumber = parseFloat(inputValue);

  return inputValueNumber;
};

function mainBalanceValue (id){
  let mainText = document.getElementById(id).innerText;

  let mainBalanceNumber = parseFloat(mainText);
  
  return mainBalanceNumber;

};

function response(id){
  document.getElementById("addMoneyDiv").classList.add("hidden");
  document.getElementById("cashOutDiv").classList.add("hidden");
  document.getElementById("transferDiv").classList.add("hidden");
  document.getElementById("transactionDiv").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
