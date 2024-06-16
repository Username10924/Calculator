function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber = null, operator = null, secondNumber = null;

function operate(firstNumber, secondNumber, operator) {
    switch(operator) {
        case "+":
            return add(firstNumber, secondNumber);
            break;
        case "-":
            return subtract(firstNumber, secondNumber);
            break;
        case "*":
            return multiply(firstNumber, secondNumber);
            break;
        case "/":
            return divide(firstNumber, secondNumber);
            break;
        default:
            return "Invalid operator!";
    }
}


let display = document.querySelector(".display");
let buttons = document.querySelector(".calculator");
let value = 0;
let pressed = false;
let changable = true;
let op = document.querySelectorAll(".operator");

function calculate() {
    if(pressed || operator == null)
        return;
    secondNumber = value;
    display.textContent = operate(firstNumber, secondNumber, operator);
    changable = false;
    firstNumber = parseFloat(display.textContent);
    secondNumber = null;
    value = null;
    operator = null;
}

buttons.addEventListener("click", (e) => {
    let t = e.target;
    switch(t.id) {
        case "AC":
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent = "0";
            firstNumber = null;
            secondNumber = null;
            value = 0;
            changable = true;
            break;
        case "equal":
            calculate();
            break;
        case "divide":
            if(pressed)
                op.forEach((e) => e.style.backgroundColor = "orange");
            if(firstNumber != null)
                calculate();
            t.style.backgroundColor = "rgb(255, 185, 55)";
            operator = "/";
            pressed = true;
            firstNumber == null ? firstNumber = value : secondNumber = value;
            changable = true;
            break;
        case "seven":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent == "0" ? display.textContent = "7" : display.textContent = display.textContent + "7";
            value = parseFloat(display.textContent);

            break;
        case "eight":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent == "0" ? display.textContent = "8" : display.textContent = display.textContent + "8";
            value = parseFloat(display.textContent);
            break;
        case "nine":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent == "0" ? display.textContent = "9" : display.textContent = display.textContent + "9";
            value = parseFloat(display.textContent);
            break;
        case "asterik":
            if(pressed)
                op.forEach((e) => e.style.backgroundColor = "orange");
            if(firstNumber != null)
                calculate();
            t.style.backgroundColor = "rgb(255, 185, 55)";
            operator = "*";
            pressed = true;
            firstNumber == null ? firstNumber = value : secondNumber = value;
            changable = true;
            break;
        case "four":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent == "0" ? display.textContent = "4" : display.textContent = display.textContent + "4";
            value = parseFloat(display.textContent);
            break;
        case "five":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent == "0" ? display.textContent = "5" : display.textContent = display.textContent + "5";
            value = parseFloat(display.textContent);
            break;
        case "six":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent == "0" ? display.textContent = "6" : display.textContent = display.textContent + "6";
            value = parseFloat(display.textContent);
            break;
        case "three":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent == "0" ? display.textContent = "3" : display.textContent = display.textContent + "3";
            value = parseFloat(display.textContent);
            break;
        case "two":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent == "0" ? display.textContent = "2" : display.textContent = display.textContent + "2";
            value = parseFloat(display.textContent);
            break;
        case "one":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent == "0" ? display.textContent = "1" : display.textContent = display.textContent + "1";
            value = parseFloat(display.textContent);
            break;
        case "minus":
            if(pressed)
                op.forEach((e) => e.style.backgroundColor = "orange");
            if(firstNumber != null)
                calculate();
            t.style.backgroundColor = "rgb(255, 185, 55)";
            operator = "-";
            pressed = true;
            firstNumber == null ? firstNumber = value : secondNumber = value;
            changable = true;
            break;
        case "plus":
            if(pressed)
                op.forEach((e) => e.style.backgroundColor = "orange");
            if(firstNumber != null)
                calculate();
            t.style.backgroundColor = "rgb(255, 185, 55)";
            operator = "+";
            pressed = true;
            firstNumber == null ? firstNumber = value : secondNumber = value;
            changable = true;
            break;
        case "zero":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            display.textContent == "0" ? display.textContent = "0" : display.textContent = display.textContent + "0";
            value = parseFloat(display.textContent);
            break;
        case "dot":
            if(!changable)
                break;
            if(pressed) {
                op.forEach((e) => e.style.backgroundColor = "orange");
                pressed = false;
                display.textContent = "0";
            }
            let temp = display.textContent.split("");
            temp.some((e) => e == ".") ? ignore : display.textContent = display.textContent + ".";
            break;
    }
})