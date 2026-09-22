const input = document.getElementById("userInput");
const form = document.getElementById("textForm");

let numInput = "";

form.addEventListener("submit", function(event){
    // Prevents page refresh after input
    event.preventDefault();

    numInput = input.value;

    if(numInput % 2 == 0){
        document.getElementById("isOddOrEven").innerHTML = "Even";
    }
    else{
        document.getElementById("isOddOrEven").innerHTML = "Odd";
    }
});