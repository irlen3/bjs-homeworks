// task 1
const parseCount = (data) => {
    //let result =;  // Number.parseInt разбирает строковый аргумент и возвращает целое число
    if (isNaN(Number.parseInt(data))) { //  проверяем если результатом парсинга является значение NaN, то выбрасываем исключение с ошибкой "Невалидное значение".
        // throw new Error ("Невалидное значение");
        const vaildError = new Error("Невалидное значение");
        this.vaildError = vaildError;
        throw vaildError;
    }
    return Number.parseInt(data);// возвращаем результат парсинга функции       
}

const validateCount = (data) => {
// Аргументом функции является значение, которое необходимо распарсить.
// Попробуйте распарсить значение с помощью функции parseCount.
// Если распарсить удаётся успешно, то возвращайте результат.
// Перехватывайте исключение, которое может выбрасывать функция parseCount.
// Возвращайте ошибку из функции в случае перехвата исключения.
        try {
            //let result = parseCount(data);
            return parseCount(data);
        } 
        catch(e){
           // if (result != NaN)
            // console.log('Ошибка произошла!');
            return this.vaildError;
        }
}

// task 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

    // проверка правила существования треугольника (сумма двух сторон меньше третьей, если истина - выбрасываем исключение с ошибкой "Треугольник с такими сторонами не существует"
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    // Метод getPerimeter должен возвращать периметр треугольника
    getPerimeter() {
        try {
        return this.a + this.b + this.c;
      }
        catch(e) {
            return 'Ошибка! Треугольник не существует'; 
        }
    }

    // Метод getArea должен возвращать площадь треугольника (для подсчёта площади воспользуйтесь формулой Герона).
    getArea() {
       try {
            let p = 1 / 2 * (this.a + this.b + this.c); // полупериметр
            let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); // Math.sqrt - квадратный корень
            area = + area.toFixed(3); // '+' - преобразование к числовому типу
            return area;
        }
        catch(e) {
            return 'Ошибка! Треугольник не существует';
        }
       
   }
}

const getTriangle = (a, b, c) => {
    // Аргументами функции являются 3 значения длин сторон.
    // Попытайтесь вернуть новый объект треугольника.
    // В случае перехвата исключения возвращайте объект с двумя методами getArea и getPerimeter, которые возвращают строку: "Ошибка! Треугольник не существует".
    try {
        const triangle = new Triangle(a, b, c);    
        return triangle;
    } 
    catch(e){
        return {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}