//String.prototype.isPalindrome - для задачи №1
// Используйте прототип класса String для добавления новой возможности
// В прототип класса String добавьте функцию isPalindrome, которая будет проверять строку на полиндром
// Используйте this для обращения к текущей строке на которой применяется функция
// Не используйте стрелочную функцию (предпочитая обычную) для того, что бы не потерять контекст
// Функция должна возвращать true если строка читается одинаково в любую сторону, и false если строка читается по-разному.
// Реализуйте регистронезависимость функции
// Проверьте вашу функцию: console.log("А роза упала на лапу Азора")//true

    String.prototype.isPalindrome = function () {
        //String.call(this);
        this.str = this;
        if (this.str == undefined || this.str == "") {
            return false;
        }
    
        this.str = this.str.toLowerCase();
        this.str = this.str.replace(/\s/g, '');

        if (this.str == this.str.split("").reverse().join("")) {
            console.log('true');
            return true;
        } else {
            console.log('false');
            return false;
        }
    }
    //String.prototype.isPalindrome();
    let locString = new String();
    // locString = 'А роза упала на лапу Азора';
    locString.isPalindrome();
    
//task 2
function getAverageMark(marks) {
    let total = 0;
    let averageMark;
    let roundedAverage;
    if (marks.length === 0) {
        return 0; 
    }
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    averageMark = total / marks.length;
    roundedAverage = Math.round(averageMark);
    return roundedAverage;
}

function getAverageScore(data) {
    let localObject = {};  
    let totalAverage = 0;

    if (Object.keys(data).length === 0)
    {
        localObject.average = 0;
        return localObject;
    }

    for (let property in data)
    {
        // let value = data[property];
        // console.log(`Свойство ${property}, значение: ${value}`);
        localObject[property] = getAverageMark(data[property]);
        totalAverage += localObject[property];
    }

    localObject.average = totalAverage/Object.keys(data).length;
    return localObject;
}

// task 3
function checkBirthday(birthday) {
// Получить текущую дату в Unix Timestamp и записать в переменную now;
// Создать экземпляр Date с датой рождения пользователя (помните, что месяцы начинаются с 0, а даты с 1);
// Получить Unix Timestamp даты рождения пользователя и записать в переменную birthday;
// Посчитать разницу между birthday и now в миллисекундах, сохранив в переменную diff;
// Определить возраст пользователя age, разделив diff на количество миллисекунд в году (помните про високосные года);
// Верните в качестве результата работы функции, анализ age, является ли клиент совершеннолетним ( > 18 лет).
    //let result;
    const now = Date.now(); // Получить текущую дату в Unix Timestamp и записать в переменную now;
    const date = new Date(birthday); // Создать экземпляр Date с датой рождения пользователя (помните, что месяцы начинаются с 0, а даты с 1);
    let birthdayDate = +date;
    let diff = now - birthdayDate;
    let age = diff / (365.25 * 24 * 60 * 60 * 1000); // Определить возраст пользователя age, разделив diff на количество миллисекунд в году (считаем, что у нас равновисокосные года);
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}