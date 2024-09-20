
document.getElementById("login-btn").addEventListener("click", function(event){
     event.preventDefault();

     let inputValue = getInputValue("login-phone-input");
     let pinValue = getInputValue("login-pin-input");

    if(inputValue === 01771814597 && pinValue === 1234){
       window.location.href = "./home.html"
    }
    else{
        alert ("Your Phone Or Pin Incorrect");
    }
     
});

