// link : https://www.youtube.com/watch?v=BUAhpB3FmS4

// Ternary Operator(삼항 연산자)
// Bad Code
function getResult(score) {
    let result;
    if (score > 5) {
        result = 'thumbs up'
    } else {
        result = 'thumbs down'
    }
    return result;
}

// Good Code
function getResult(score) {
    return score > 5  ? 'thumbs up' : 'thumbs down';
}

// Nullish coalescing operator : ??
// leftExpr ?? rightExpr : leftExpr이 null, undefined일 경우에만 rightExpr수행

// Logical OR operator ||
// leftExpr || rightExpr : leftExpr이 falsy일 경우에만 rightExpr 실행됨
// falsy : false, 0, -0, Nan, null, undefined, ""




// Bad Code
function printMessage(text) {
    let message = text;
    if ( text == null || text == undefined) {
        message = 'Nothing to display'
    }
    console.log(message);
}

// Good Code
function printMessage(text) {
    const message = text ?? 'Nothing to display'
    console.log(message);
}

//디폴트 값 설정했을때와의 차이점은???
function printMessage(text = 'Nothing to display') {
    console.log(text)
}

printMessage('Hello')
printMessage(undefined)
printMessage(null)  // 의 결과가 다르다!!!!


// Object Destructuring
const {name, age} = person;

// Spread Syntax - object
// 아래 두 항목을 합치려면 어떻게 해야할할
const item = { type: 'pants', size:'2XL'};
const detail = { price: 20, made: 'Korea', gender: 'M'}

// Good Code
const shirt0 = Object.assign(item,detail);

// Better Code
const shirt = {...item, ...detail, price:40};//price 바꾸고 싶다면 추가

// Spread Syntax - array
let fruits = ['수박', '토마토', '바나나']

// fruits.push('딸기') 
fruits = [...fruits, '딸기']

// fruits.unshift('포도')
fruits = ['포도', ...fruits]

fruits2 = ['메론', '자몽']
let combined = fruits.concat(fruits2)
combined = [...fruits,"체리" ,...fruits]


// Optional Chaining
// Bad Code
function display(person) {
    if (person.job && person.job.title) {
        console.log(person.job.title)
    }
}

// Good Code
function display(person) {
    if (person.job?.title) {
        console.log(person.job.title)
    }
}

// Good Code
function display(person) {
    const title = person.job?.title ?? 'No Job Yet!'
    console.log(title)
}

// Template literals


// Loop
// Q1. 짝수 항목만 *4 한 후 총 합 구하기
const items = [1, 2, 3, 4, 5, 6];
let sum = 0;
const result = items.forEach((item) => {
    if (item % 2 === 1) return
    sum += item*4;
    return sum;
})
console.log(sum)

//Good Code
const items2 = [1, 2, 3, 4, 5, 6];
const evens = items2.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const suum = multiple.reduce((a, b) => a + b, 0);
console.log(suum)

//Good Code
const result2 = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a, b) => a + b, 0);
console.log(result2)

// Promise -> Async / await

// ! Bad Code
function displayUser() {
    fetchUser()
       .then((user) => {
        fetchProfile(user)
            .then((profile) => {
                updateUI(user, profile);
        });
       });
    }

// Good Code : 2개의 연속된 Promise를 사용하게 되는 경우라면 async / await 사용해보자
async function displayUser() {
    const user = await fetchUser();
    const profile = await fetchProfile(user);
    updateUI(user, profile);
}

// Quiz
// Remove Duplicates!
const array = ['개', '고양이', '원숭이', '개', '두더지', '고양이']
console.log(array)

console.log([... new Set(array)]);