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
    // код для задачи №1 писать здесь
    let d = (Math.pow(b,2) - 4*a*c);
    let DiskrSqrt;
    let x;
    if (d > 0) {
        DiskrSqrt = Math.sqrt(d);
        let x1 = ((-b + DiskrSqrt) / (2 * a)).toFixed(2);
        let x2 = ((-b - DiskrSqrt) / (2 * a)).toFixed(2);
        x = [x1,x2];
    }
    else if (d === 0) {
            x1 = ((-b) / (2 * a)).toFixed(2);
            x = [x1];
    }
    else {
         x = ['нет решения'];
    };
    
 /*   switch (d) {
        case (d > 0):
            DiskrSqrt = Math.sqrt(d);
            let x1 = (-b + DiskrSqrt) / (2 * a);
            let x2 = (-b - DiskrSqrt) / (2 * a);
            x = [x1,x2];
            console.log("1" + x);
            break;
        case (d === 0):
            x1 = (-b) / (2 * a);
            x = [x1];
            console.log("2" + x);
            break;
        case diskriminant < 0:
            console.log("3" + x);
            break;
    }*/
    console.log(x);
    return (x);
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let MarksLength = marks.length,
        limit = 5,
        i = 0,
        averageMark = 0,
        countMarks = 0;

    if (MarksLength > limit) {
        console.log("Задано больше " + limit + " оценок !");
        marks = marks.slice(0,limit);
    }
    else {
        limit = marks.length;
    }
    while (i < limit) {
        countMarks = countMarks + marks[i];
        i++;
    }
    averageMark = (countMarks / limit);
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}