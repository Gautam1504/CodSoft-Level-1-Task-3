let display = document.getElementById("display-box");
let currentInput ="";

function appendToDisplay(value){
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay(){
    currentInput ="";
    display.value = "";
}

function deleteValue(){
    currentInput = currentInput.slice(0,-1);
    display.value = currentInput;

}

function calculate(){
    try{
        currentInput = eval(currentInput);
        display.value = currentInput;
    }catch (error){
        display.value = "Error";

    }
}


