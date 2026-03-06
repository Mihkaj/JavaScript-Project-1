// Mini Calculator

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
   
    if (b === 0) {
        return "Error: Cannot divide by zero";
    } else 
        return a / b;
 }
   