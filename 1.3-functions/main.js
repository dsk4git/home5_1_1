"use strict";
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