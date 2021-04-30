//variables

let total = 0;
let operator = null
let value1 = 0;
let value2 = 0;
let display = document.getElementById("display");
display.innerHTML = total;

function reset() {
    total = 0
    value1 = 0
    value2 = 0
    display.innerHTML = total
}

document.getElementById('reset').onclick = reset


let numList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let numValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < 10; i++) {
    document.getElementById(numList[i]).addEventListener('click', function() {
        if (operator == null) {
            value1 = value1*10 + numValues[i]
            display.innerHTML = value1
        }
        else {
            value2 = value2*10 + numValues[i]
            display.innerHTML = value2
        }
        
    })

    document.getElementById(numList[i]).addEventListener('mousedown', function() {
        document.getElementById(numList[i]).style.color = 'lightblue'
    })

    document.getElementById(numList[i]).addEventListener('mouseup', function() {
        document.getElementById(numList[i]).style.color = ''
    })
}

let operatorList = ['multiply', 'divide', 'add', 'subtract']
for (let i = 0; i <= 3; i++) {
    document.getElementById(operatorList[i]).addEventListener('mousedown', function() {
        document.getElementById(operatorList[i]).style.backgroundColor = 'orange'
        operator = operatorList[i]
    })

    document.getElementById(operatorList[i]).addEventListener('mouseup', function() {
        document.getElementById(operatorList[i]).style.backgroundColor = ''
    })
}

let equals = document.getElementById('equals')
equals.addEventListener('click', function() {
    if (operator == 'multiply') display.innerHTML = value1 * value2
    if (operator == 'divide') display.innerHTML = value1 / value2
    if (operator == 'add') display.innerHTML = value1 + value2
    if (operator == 'subtract') display.innerHTML = value1 - value2
    operator = null
})