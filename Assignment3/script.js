const input = document.getElementById("userInput");
const form = document.getElementById("textForm");

let numInput = "";

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    numInput = input.value;

    if(numInput === "" || isNaN(numInput)){
        document.getElementById("isOddOrEven").innerHTML = numInput + " Improper input, please try again.";
    }
    else if(numInput % 2 == 0){
        document.getElementById("isOddOrEven").innerHTML = numInput + " is Even";
    }
    else{
        document.getElementById("isOddOrEven").innerHTML =  numInput + " is Odd";
    }
});