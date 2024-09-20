
document.getElementById("logOut-btn").addEventListener("click", function(){
    window.location.href = "./index.html";
 });

document.getElementById("add-money").addEventListener("click", function(){
   response("addMoneyDiv");
});

document.getElementById("cashOut").addEventListener("click", function(){
    response("cashOutDiv");
 });

 document.getElementById("transfer").addEventListener("click", function(){
    response("transferDiv");
 });

 document.getElementById("transaction").addEventListener("click", function (){
    response("transactionDiv");
 });
