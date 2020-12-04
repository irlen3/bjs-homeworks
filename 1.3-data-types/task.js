"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // Проконтролируйте корректность введенных данных.
    let message;
    let percent1 = percent;
    let contribution1 = contribution;
    let amount1 = amount;
  
    if (typeof percent !== "number") {
        percent1 = Number(percent);
        // let percent1 = parseFloat(percent);
         if (typeof percent1 !== "number" || isNaN(percent1)) {
            message = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
            return message;
         }
    }  

    if (typeof contribution !== "number") {
            contribution1 = Number(contribution);
            if (typeof contribution1 !== "number" || isNaN(contribution1)) {
               message = `Параметр "Cумма первоначального взноса" содержит неправильное значение "${contribution}"`;
               return message;
            }
       }  

       if (typeof amount !== "number") {
            amount1 = Number(amount);
            if (typeof amount1 !== "number" || isNaN(amount1)) {
               message = `Параметр "Cумма кредита" содержит неправильное значение "${amount}"`;
               return message;
            }
       }  
     
    let sumCredit = amount1 - contribution1; // тело кредита

    // Посчитайте количество выплачиваемых месяцев
    let currentDate = new Date(); // получение текущей даты 
    let months = (currentDate.getFullYear()-date.getFullYear())*12+(currentDate.getMonth()-date.getMonth());
    //let months = Math.round(((currentDate - date) /(24 * 60 * 60 * 1000)) / 31); // было в милисекундах
   
    //Ежемесячная оплата рассчитывается по формуле: Платеж=S*(P+P/(((1+P)^n)-1)), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
    let P = 1/12 * percent1 / 100;
    let amountMontly = sumCredit * (P + P / (((1 + P) ** months) - 1));

    //Посчитайте общую сумму, которую придется заплатить клиенту, округлите результат до двух значений после запятой
    let totalAmount = (amountMontly * months);
    if (totalAmount !== 0)
        totalAmount = totalAmount.toFixed(2);
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    if (name === "" || name === undefined) {
        name = "Аноним";
    }
    let greeting = `Привет, мир! Меня зовут ${name}.`;
    return greeting;
}