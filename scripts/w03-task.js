/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2){
    return `sum ${number1}+ ${number2}`


let addNumber1=Number(document.querySelector('#add1').value);
let addNumber2=Number(document.querySelector('#add2').value);
document.querySelector('#sum').value=add(addNumber1, addNumber2);
};
document.querySelector('#addNumbers').addEventListener('click', addNumbers);    


/* Function Expression - Subtract Numbers */

function subtract(subtract1,subtract2){
return subtract1 - subtract2;

let subtractNumbers=Numbers(document.querySelector('#subtract1').value);
document.querySelector('#difference').value=subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);    


/* Arrow Function - Multiply Numbers */
const multiply=(factor1,factor2)=>factor1*factor2;
const multiplyNumbers=()=>{

const factor1=parseFloat(document.getElementById('#factor1').value);
const factor2=parseFloat(document.getElementById('#factor2').value);

if (! isNaN(factor1) && !isNaN(factor2)){

    const product=multiply(factor1, factor2);

document.getElementById('#product').textContent=`Product: ${product}`; 
} else {   
document.getElementById('#product').textContent='Enter numbers';
}
}
document.getElementById('#multiplyNumbers').addEventListener('çlick', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide=(x,y)=>x/y;

const divideNumbers =(x,y)=>{
    let dividend= parseFloat(document.getElementById("#dividend").value);
    let divisor= parseFloat(document.getElementById("#divisor").value);
    let quotient=divide(dividend, divisor);
    document.getElementById("#quotient").value=quotient.toFixed(2);
};
document.getElementById("#divideNumbers").addEventListener("click",divideNumbers);


/* Decision Structure */
function getTotal(){

let subtotal=parseFloat(document.getElementById('#subtotal').value);
if (document.getElementById('#member').checked){
    total=subtotal-subtotal*0.2;
}
document.getElementById('#total'),texContent=total.toFixed(2);
}
document.getElementById('#getTotal').addEventListener('click',getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray=[1,2,3,4,5,6,7,8,9,10,11,12,13];


document.getElementById("array").textContent = `Array: ${numbersArray.join(", ")}`;

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById("#odds").textContent = `Odds: ${oddNumbers.join(", ")}`;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById("#evens").textContent = `Evens: ${evenNumbers.join(", ")}`;

/* Output Sum Only Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.getElementById("#sumOfArray").textContent = `Sum of Array: ${sumOfArray}`;

/* Output Multiplied by 2 Only Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("#multiplied").textContent = `Multiplied by 2: ${multipliedArray.join(", ")}`;

/* Output sumOfMultiplied by 2 Only Array */
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
document.getElementById("#sumOfMultiplied").textContent = `Sum of Multiplied: ${sumOfMultiplied}`;







