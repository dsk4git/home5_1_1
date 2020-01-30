"use strict";
// Задание 1. Решение квадратного уравнения
let rez;

function getSolutions(a,b,c){
    let D = (Math.pow(b,2) - 4*a*c);
    let diskrSqrt = 0,
        x1 = 0,
        x2 = 0,
        x = new Object();

    if (D > 0) {
        diskrSqrt = Math.sqrt(D);
        x1 = ((-b + diskrSqrt) / (2 * a)).toFixed(2);
        x2 = ((-b - diskrSqrt) / (2 * a)).toFixed(2);
        x.roots = [x1,x2];
        x.roots[0] = [x1];
        x.roots[1] = [x2];
        x.D = D;
    }
    else if (D === 0) {
        x1 = ((-b) / (2 * a)).toFixed(2);
        x.roots = [x1];
        x.roots[0] = x1;
        x.D = D;
    }
    else {
         x.D = D;
    }
    return(x);
}

function showSolutionsMessage(a,b,c){
    
    let result = new Object();

    result = getSolutions(a,b,c);
    if (c < 0){
        if (b < 0){
            console.log("Вычисляем корни квадратного уравнения "+ a + 'x**2 ' + b + 'x' + c);
        }
        else{
            console.log("Вычисляем корни квадратного уравнения "+ a + 'x**2 +' + b + 'x' + c);
        }
    }
    else{
        if (b < 0){
            console.log("Вычисляем корни квадратного уравнения "+ a + 'x**2 ' + b + 'x +' + c);
        }
        else{
            console.log("Вычисляем корни квадратного уравнения "+ a + 'x**2 +' + b + 'x +' + c);
        }
    }
    console.log("Значение дискриминанта: " + result.D);
    switch (true) {
        case (result.D < 0):
            console.log("Уравнение не имеет вещественных корней");
            break;
        case (result.D === 0):
            console.log("Уравнение имеет один корень X1 = " + result.roots[0]);
            break;
        default:
            console.log("Уравнение имеет два корня. X1 = " + result.roots[0] + ", X2 = " + result.roots[1]);
            break;
    }
//    return(x);
}

rez = showSolutionsMessage(2,-3,-2);
rez = showSolutionsMessage(2,4,2);
rez = showSolutionsMessage(2,3,2);

// Задание 2.  Журнал средних значений оценок

let data = new Object(), dataRez = new Object();

data = {algebra: [5,5,5,5,5,5,5,5,5,5,5,5],
        geometry: [4,5,4,5,4,5],
        russian: [3,3,4,5],
        physics: [5,5],
        music: [2,2,2,2,2,2,2,2,2,2],
        english: [4,4,3],
        poetry: [5,3,4],
        chemistry: [2,4,4,4,4,4,4,4],
        french: [4,4],
        biology: [4,3,5,4,3]
}

let index, key, mark = 0, sum = 0, avg = 0, i = 0,
    countSubjects = 0, totalAverageMarks = 0,
    value = new Object(); 

function getAverageScore(data){

    for (index in data){
        value = data[index];
        countSubjects = countSubjects + 1;

        getAverageArray(value);

        totalAverageMarks = totalAverageMarks + avg;
        dataRez[index] = avg;
    }
    if (countSubjects < 10){
    // Выполнить действия для случая количества предметов в объекте data менее 10
        console.log("Количество предметов в объекте data менее 10 !");
    }
    dataRez["average"] = (totalAverageMarks / countSubjects);
    return (dataRez);
}

function getAverageArray(value1){
// Подсчет среднего в массиве
i = 0;
sum = 0;
mark = 0;
for (key in value1) {
    mark = mark + value1[key];
    i = i + 1;
}
    sum = mark;
    avg = sum / i;
    return(avg);
}

getAverageScore(data);
console.log(dataRez);


// Задание 3. Расшифровка данных

let secretData = {"aaa": 0, "bbb": 0};
let dataResult = {"firstName":"", "lastName": ""};

function getPersonData(sec){

    let a = sec["aaa"];
    let b = sec["bbb"];
    if (a === 0){
        dataResult.firstName = "Родриго";
    }
    else{
        dataResult.firstName = "Эмильо";
    }
    if (b === 0){
        dataResult.lastName = "Родриго";
    }
    else{
        dataResult.lastName = "Эмильо";
    }
    return(dataResult);
}

secretData = {"aaa": 0, "bbb": 0};
console.log(getPersonData(secretData));

secretData = {"aaa": 1, "bbb": 0};
console.log(getPersonData(secretData));

secretData = {"aaa": 0, "bbb": 1};
console.log(getPersonData(secretData));

secretData = {"aaa": 1, "bbb": 1};
console.log(getPersonData(secretData));