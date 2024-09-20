

document.getElementById("addmoney-btn").addEventListener("click", function(event){
    event.preventDefault();
    let addMoneyAmount  = getInputValue("addmoney-input-amount");
    let addMoneyPin = getInputValue("addmoney-pin-input");
    if(isNaN(addMoneyAmount)){
        alert("Wrong Input Enter Number Value");
        return ;
    }

    let mainBalance = mainBalanceValue ("main-balance"); 

    let containerDiv = document.getElementById("container-div");
    if(addMoneyPin === 1234){
        let totalMoney  = addMoneyAmount + mainBalance;
       document.getElementById("main-balance").innerText = totalMoney;

       let historyDiv = document.createElement("div");
       historyDiv.classList.add("p-4","bg-blue-200","rounded-xl")
       let date = new Date();
       historyDiv.innerHTML = `
       <h1 class= "text-2xl text-green-700">${addMoneyAmount}$ Is Added Successfully and Balance Is : ${totalMoney} $</h1>
       <div class= "flex justify-between">
         <p class="mt-2 text-gray-700">Date: ${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}</p>
         <p class="mt-2 text-gray-700">Time: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}</p>
       </div>
       `
      containerDiv.appendChild(historyDiv);
      alert (`Amount: ${addMoneyAmount} Added Successfully`);

    }
    else{
        alert ("Wrong Pin Number");
    }
});


document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault();
    let cashOutAmount  = getInputValue("cashout-input-amount");
    let cashOutPin = getInputValue("cashout-pin-input");
    if(isNaN(cashOutAmount)){
        alert("Wrong Input Enter Number Value");
        return ;
    }

    let mainBalance = mainBalanceValue ("main-balance"); 
    if(mainBalance<cashOutAmount){
        alert ("sufficient Amount (You don't have This Amount");
        return 0;
    }

    let containerDiv = document.getElementById("container-div");

    if(cashOutPin === 1234){
        let totalMoney  =mainBalance - cashOutAmount ;
        document.getElementById("main-balance").innerText = totalMoney;

        let historyDiv = document.createElement("div");
        historyDiv.classList.add("p-4","bg-blue-200","rounded-xl")
        let date = new Date();
        historyDiv.innerHTML = `
        <h1 class= "text-2xl text-red-600">${cashOutAmount}$ Is CashOut Successfully and Balance Is : ${totalMoney} $</h1>
        <div class= "flex justify-between">
          <p class="mt-2 text-gray-700">Date: ${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}</p>
         <p class="mt-2 text-gray-700">Time: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}</p>
        </div>
        `
       containerDiv.appendChild(historyDiv);
       alert (`Amount: ${cashOutAmount} Cashout Successfully`);
      
    }
    else{
        alert ("Wrong Pin Number");
    }
});


document.getElementById("transferBtn").addEventListener("click", function(event){
    event.preventDefault();
    let mainBalance = mainBalanceValue ("main-balance");

    let transferAmount = getInputValue("transfer-input-amount");
    if(isNaN(transferAmount)){
        alert("Wrong Input Enter Number Value");
        return ;
    }

    if(mainBalance<transferAmount){
        alert ("sufficient Amount (You don't have This Amount");
        return 0;
    }

    let transferAcount =  document.getElementById("transfer-acount-input").value;
    let  transferAcountNumber = parseFloat(transferAcount);
    let transferPin = getInputValue("transfer-pin-input");

    let containerDiv = document.getElementById("container-div");

    if(transferPin === 1234 ){
        let balance = mainBalance - transferAmount;
        document.getElementById("main-balance").innerText = balance;

        let historyDiv = document.createElement("div");
        historyDiv.classList.add("p-4","bg-blue-200","rounded-xl")
        let date = new Date();
        historyDiv.innerHTML = `
        <h1 class= "text-2xl text-yellow-600">${transferAmount}$ Transfer Ac-No : ${transferAcountNumber} Successfully and Balance Is : ${balance} $</h1>
        <div class= "flex justify-between">
           <p class="mt-2 text-gray-700">Date: ${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}</p>
           <p class="mt-2 text-gray-700">Time: ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}</p>
        </div>
        `
       containerDiv.appendChild(historyDiv);
       alert (`Amount: ${transferAmount} Transfer Successfully`);
    }
    else{
        alert("wrong Pin Number")
    }

});
