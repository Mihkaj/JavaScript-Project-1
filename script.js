// Mini Calculator

console.log("Welcome to my calc! (That's slang for calculator).")
console.log("Just type in a number, then an Operator(+,-,*,/), then another number.")
console.log("Then be prepared to witness mathematical magic!")


/*
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function devide(a, b) {
        return a / b;
    }
*/
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }

}