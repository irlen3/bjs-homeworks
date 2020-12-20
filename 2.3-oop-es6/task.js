// task 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name; // название
        this.releaseDate = releaseDate; // дата выпуска
        this.pagesCount = pagesCount; // количество страниц
        this.state = 100; // состояние
        this.type = null; // тип
    }

    fix() {
        this.state = this.state * 1.5;
   }

    set state(state) {
        if (state < 0) {
            this._newState = 0;
        } else if (state > 100) {
            this._newState = 100;
        } else {
            this._newState = state;
        }
    }

    get state() {
        return this._newState;
    }
}

class Magazine extends PrintEditionItem { // класс Magazine явл.наследником класса PrintEditionItem
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

// task 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.book = book;
        if(book.state > 30) {
            this.books.push(this.book);
        } 
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                //let m = this.books.find(type, value))
                return this.books[i]; 
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        this.bookName = bookName;
        let deleteBook = [];
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === this.bookName) {
                deleteBook = this.books.splice(i, 1);
                return deleteBook[0];
            } 
        }
        return null;
    //         // Если запрошенная книга найдена, метод должен удалять книгу из хранилища books, и возвращать её. 
    //         // Если книга не была найдена, метод должен возвращать null.
     }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1919, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new Magazine("Типовой школьный журнал", 2019, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("name", "Машина времени")); //
console.log(library.findBookBy("name", "Типовой школьный журнал")); //Типовой школьный журнал
console.log(library.findBookBy("pagesCount", 60)); //"Мурзилка"
console.log(library.findBookBy("releaseDate", 1919)); // Пикник на обочине

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 
//library.giveBookByName("Машина времени");

const givedBook = library.giveBookByName("Машина времени");
console.log("Выдали книгу: " + givedBook.name);
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
givedBook.state = 40;
console.log(givedBook.state); //40
givedBook.fix();
console.log(givedBook.state); //60
library.addBook(givedBook);
console.log("Количество книг после возврата: " + library.books.length);

console.log(library.findBookBy("releaseDate", 786)); //null

// task 3
class StudentLog {
    constructor(name) {
        this.name = name;
        this.data = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        let massLenght = 0;
        let checkStatus = false;
        if (grade !== 1 && grade !== 2 && grade !== 3 && grade !== 4 && grade !== 5) {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            return 0;
        } 

        // проверяем пустой ли объект
        if (Object.keys(this.data).length === 0) {
            this.data[subject] = [];
            massLenght = this.data[subject].push(grade);
        } else {
            // проверяем есть ли свойство subject в объекте data
            if (this.data.hasOwnProperty(subject))
                 checkStatus = true;
            }
            if (checkStatus == true) {
                massLenght = this.data[subject].push(grade);
                console.log(this.data);
            } else {
                this.data[subject] = [];
                massLenght = this.data[subject].push(grade);
                console.log(this.data);
            }  
      return massLenght;
   }

    getAverageBySubject(subject) {
        let total = 0;
        let averageMark = 0;
        let roundedAverage = 0;
        if (Object.keys(this.data).length === 0) {
            return 0; 
        }
      //  for (let property in this.data) {
            if (this.data.hasOwnProperty(subject)) {
                for (let i = 0; i < this.data[subject].length; i++)
                {
                    total += this.data[subject][i];
                }
            } else {
                return 0;
            }
        averageMark = total / Object.keys(this.data[subject]).length;
        roundedAverage = Math.round(averageMark);
        return roundedAverage;
    }

    getTotalAverage() {
        let total = 0;
        let totalAverage = 0;
    
        if (Object.keys(this.data).length === 0) {
            return 0;
        } else {
            for (let property in this.data)
            {
                total += this.getAverageBySubject(property);
            }
        }
        totalAverage = total/Object.keys(this.data).length;
        return totalAverage;
    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(2, 'algebra')); //
console.log(log.addGrade(4, 'algebra')); //

console.log(log.addGrade(5, 'geometry')); 
console.log(log.addGrade(4, 'geometry')); 
console.log(log.addGrade(3, 'geometry')); 
console.log(log.addGrade(1, 'chemistry')); 
console.log(log.addGrade(5, 'chemistry')); 
console.log(log.addGrade(41, 'geometry'));
console.log(log.addGrade(5, 'music'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0

console.log('Средняя оценка: ' + log.getTotalAverage()); // 3,75
