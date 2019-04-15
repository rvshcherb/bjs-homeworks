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


function validate(smth) {
 return Number(smth) ? smth : console.log(`Значение ${smth} не корректно`);
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let todayDate = new Date();
    let loanDate = new Date(date);
    let duration = validateDate();

    function validateDate(){
      let value = Math.floor((loanDate - todayDate) / (1000 * 3600 * 24 * 365 / 12));
      return (value > 0) ? value : console.log('Недопустимая дата');
    } 
      
    let actualPercent = validate(percent) / 100;
    let loan = validate(amount) - validate(contribution);
    let monthlyPercentage = actualPercent / 12;
    let monthlyPayment = loan * (monthlyPercentage + monthlyPercentage/(Math.pow((1 + monthlyPercentage),24) - 1));
    let total = monthlyPayment * duration;
    
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
  let greetings =  (name) ? `${name}` : 'Аноним';
  console.log(`Привет Мир! Меня зовут ${greetings}`);
  return `Привет Мир! Меня зовут ${greetings}`;
}