// task 1
const parseCount = (data) => {
    let result = Number.parseInt(data);  // Number.parseInt разбирает строковый аргумент и возвращает целое число
    if (isNaN(result)) { //  проверяем если результатом парсинга является значение NaN, то выбрасываем исключение с ошибкой "Невалидное значение".
        throw new Error ("Невалидное значение");
        // const vaildError = new Error("Невалидное значение");
        // this.vaildError = vaildError;
        // throw vaildError;
    }
    return result;// возвращаем результат парсинга функции       
}

const validateCount = (data) => {
// Аргументом функции является значение, которое необходимо распарсить.
// Попробуйте распарсить значение с помощью функции parseCount.
// Если распарсить удаётся успешно, то возвращайте результат.
// Перехватывайте исключение, которое может выбрасывать функция parseCount.
// Возвращайте ошибку из функции в случае перехвата исключения.
        try {
            let result = parseCount(data);
            return result;
        } 
        catch(e) {
           return "Невалидное значение";
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
        return this.a + this.b + this.c;
    }

    // Метод getArea должен возвращать площадь треугольника (для подсчёта площади воспользуйтесь формулой Герона).
    getArea() {
            let p = 1 / 2 * this.getPerimeter(); // полупериметр
            let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); // Math.sqrt - квадратный корень
            area = Number(area.toFixed(3)); // '+' - преобразование к числовому типу
            return area;     
   }
}

const getTriangle = (a, b, c) => {
    // Аргументами функции являются 3 значения длин сторон.
    // Попытайтесь вернуть новый объект треугольника.
    // В случае перехвата исключения возвращайте объект с двумя методами getArea и getPerimeter, которые возвращают строку: "Ошибка! Треугольник не существует".
    try {
        //const triangle = new Triangle(a, b, c);    
        return triangle = new Triangle(a, b, c);
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