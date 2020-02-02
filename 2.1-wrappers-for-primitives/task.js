function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №1 писать здесь
    let datYear = new Date().getFullYear(),
        datMonth = new Date().getMonth(),
        durationCredit, valuePerMonth = 0, proc = 0, totalAmount = 0,
        datYearFinish,
        datMonthFinish;

        datYearFinish = parseInt(date.slice(0,4));
        datMonthFinish = parseInt(date.slice(5,7)) - 1;

    durationCredit = (datYearFinish - datYear) * 12 + datMonthFinish - datMonth;
    /*console.log("Срок ипотеки : " + durationCredit);*/

if (isNaN(percent = testType(percent))){
    console.log("Ошибка во вводе процента за кредит !");
}

if (isNaN(contribution = testType(contribution))){
    console.log("Ошибка во вводе первоначального взноса по кредиту !");
}

if (isNaN(amount= testType(amount))){
    console.log("Ошибка во вводе суммы кредита !");
}

    proc = percent/12/100;
    valuePerMonth = (amount - contribution) * (proc + proc / (Math.pow((1 + proc),durationCredit)-1));
    // Платеж=S*(P+P/(((1+P)^n)-1))

    totalAmount = (valuePerMonth * durationCredit).toFixed(2);
    testType(durationCredit);
    if (isNaN(dat1 = testType(durationCredit)) || durationCredit < 0){
        console.log("Ошибка во вводе даты окончания кредита. Проверьте поле срок ипотеки !");
        totalAmount = 0;
    }
    
    console.log(`К возврату:  ${totalAmount}  руб.`);

    return totalAmount;
}

function testType(parameter){
    switch (typeof parameter) {
        case 'string':
            parameter = parseInt(parameter);
//            console.log(parameter, (typeof parameter));
//            console.log("parameter string " + parameter);
            if (isNaN(parameter)){
                console.log("Заданный параметр неверен (не является числом) :" + parameter);                
                return NaN;
            }
            break;
        case 'number':
//            console.log(parameter, (typeof parameter));
//            console.log("parameter number" + parameter);
            break;
        default:
            break;
    }
    return parameter;
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