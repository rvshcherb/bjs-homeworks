
"use strict";


function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){

    let discriminant = Math.pow(b,2) - 4 * a * c;
    console.log(discriminant);
    if (discriminant < 0) {
        console.log("Нет корней");  
    } else if (discriminant === 0) {
        let x = -b / 2 * a;
        console.log (x);
        return x;
    } else {
        let x = [];
        x.push((-b + Math.sqrt(discriminant)) / (2 * a));
        x.push((-b - Math.sqrt(discriminant)) / (2 * a));
        console.log (x);
        return x;
    }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let today_date = new Date();

    let today_year = today_date.getFullYear();
    let today_month = today_date.getMonth();
    let today_day = today_date.getDate();

    let birthday_year = dateOfBirthday.getFullYear();
    let birthday_month = dateOfBirthday.getMonth();
    let birthday_day = dateOfBirthday.getDate();
    
    let age = today_year - birthday_year;

    if ((birthday_month > today_month) || ((birthday_month == today_month) && (birthday_day > today_day))) {
        age--;
    }
    
    console.log(age);
    
    let greeting = (age < 18) ? `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!` : `Не желаете ли олд-фэшн, ${name}?`; 
    return greeting;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){

    if (marks.length > 5) {
        console.log("массив слишком длинный");
        marks = marks.slice(0,5);
    }

    let summ = 0;
    for (let i = 0; i < marks.length; i++) {
        summ = summ + marks[i];
    } 

    let averageMark = summ / marks.length;
    console.log(`Средняя оценка: ${averageMark}`);
    return averageMark;
}
