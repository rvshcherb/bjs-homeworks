"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let todayDate = new Date();
    let loanDate = new Date(date);
    let duration = Math.floor((loanDate - todayDate) / (1000 * 3600 * 24 * 365 / 12));
      
    let actualPercent = percent / 100;
    let loan = amount - contribution;
    let monthlyPercentage = actualPercent / 12;
    let monthlyPayment = amount * (monthlyPercentage + monthlyPercentage/(Math.pow((1 + monthlyPercentage),24) - 1));
    let total = monthlyPayment * 24;
    
    console.log(total.toFixed(2));
    return total.toFixed(2);
}



function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
}