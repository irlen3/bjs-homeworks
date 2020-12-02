"use strict";
function getResult(a,b,c){
    // код для задачи №1 писать здесь
    // решить 2x^2+4x-3=0;
    let D; // дискриминант
    D = b ** 2 - 4 * a * c;
    let result = [];
    if (D < 0) {
        return result;
    } else if (D === 0) {
        result[0] = - b / (2*a);
        return result;
    } else if (D > 0) {
        result[0] = (-b + Math.sqrt(D)) / (2*a);
        result[1] = (-b - Math.sqrt(D)) / (2*a);
        return result;
    }
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let sum = 0;
    let averageMark;
    if (marks.length === 0) {
        averageMark = 0; 
        return averageMark;
    } else if (marks.length > 5) {
        console.log("Оценок больше 5");
        marks.splice(5);
    }
    for(let i=0;  i < marks.length; i++) {
        console.log (marks[i]);
         // sum = sum + marks[i];
         sum += marks[i];
    }
    averageMark = sum / marks.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let result;
    let year = dateOfBirthday.getFullYear();
    console.log (year);
    let currentYear = new Date().getFullYear(); // получение текущей даты 
    console.log (currentYear);
    let age = currentYear - year;
    if (age >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}