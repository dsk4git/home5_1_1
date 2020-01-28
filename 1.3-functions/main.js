"use strict";
let rez = "";

function getSolutions(a,b,c){
    let D = (Math.pow(b,2) - 4*a*c);
    let DiskrSqrt = 0,
        x1 = 0,
        x2 = 0,
        x="";

    if (D > 0) {
        DiskrSqrt = Math.sqrt(D);
        x1 = ((-b + DiskrSqrt) / (2 * a)).toFixed(2);
        x2 = ((-b - DiskrSqrt) / (2 * a)).toFixed(2);
        x = ('{ ' + 'roots: ' + '[x1: ' + x1 + ', x2: ' + x2 + '], ' + 'D: ' + D + ' }');
    }
    else if (D === 0) {
        x1 = [((-b) / (2 * a)).toFixed(2)];
        x = ('{ ' + 'roots: ' + '[' + x1 + '], ' + 'D: ' + D + ' }');
    }
    else {
         x = ('{ ' + 'D: ' + D + ' }');
    };
    return(x);
}

rez = getSolutions(2,3,-2);
console.log(rez);