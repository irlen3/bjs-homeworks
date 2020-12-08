// task 1
function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let result = [];
    if (D < 0) {
        return { D: D, roots: [] }
    } 

    if (D === 0) {
        let x1 = - b / (2*a);
        result = { 
            D: D, 
            roots: [x1]
        };
        return result;
    } 
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2*a);
        let x2 = (-b - Math.sqrt(D)) / (2*a);
        result = { 
            D: D, 
            roots: [x1, x2]
        };
        return result;
    }
}

function showSolutionsMessage(a, b, c) {
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    let result = getSolutions(a, b, c);
    console.log("Значение дискриминанта: " + result.D);
    if(result.roots.length === 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }
    if(result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    }
    if(result.roots.length === 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// task 2
function getAverageScore(data) {
    let localObject = {average :0};
    let subjects = [
    'algebra',
    'geometry',
    'russian',
    'physics',
    'music',
    'english',
    'poetry',
    'chemistry',
    'french'];
    
    let totalAverage = 0;

    if (Object.keys(data).length === 0)
    {
        return localObject;
    }

    for(i = 0; i < 9; i++) {
        localObject[subjects[i]] = getAverageMark(data[subjects[i]]);
        totalAverage += localObject[subjects[i]];
    }

    localObject.average = totalAverage/9;
    return localObject;
}

function getAverageMark(marks) {
    let total = 0;
    let averageMark = 0;

    if(marks.length === 0) {
        return 0; 
    }
    // if (Array.isArray(marks)) { 
    //    if(marks.length === 0) {
    //     return 0;
    //    }
    // } 
    // else {
    //     return 0;
    // }

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    averageMark = total / marks.length;
    return averageMark;
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));

// task 3
function getPersonData(secretData) {
    let code = ["aaa", "bbb"];
    let name = ["firstName", "lastName"];
    let Pirates = {};

    for(i = 0; i < 2; i++)
    {
        Pirates[name[i]] = getDecodedValue(secretData[code[i]]);
    }
    return(Pirates);   
}

function getDecodedValue(secret) {
    if(secret === 0)
        return 'Родриго';
    if(secret === 1)
        return 'Эмильо';
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));

console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));