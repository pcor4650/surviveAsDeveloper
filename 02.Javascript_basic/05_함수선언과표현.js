// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//  자바스크립트에서 function은 object이다

// TypeScript 사이트 -> playground 에서 맛보기 : 파라미터나 리턴값에 타입 명시 한다~!


// 2. Parameters
// primitive parameters: passed by value, 메모리에 value가 저장되고
// object parameters: passed by reference , 메모리에 레퍼런스가 저장된다

function changeName(obj) {
    obj.name: 'coder'
}
const ellie = { name: 'ellie'}
changeName(ellie)
console.log(ellie)


3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}

showMessage('Hi');  // 사용자가 파라미터를 전달하지 않을 때 디폴트 값으로 출력된다


// 4.Rest parameters (added in ES6)
function printAll(...args) {
    for (let i=0; i < args.length;i++) {
        console.log(args[i])
    }

    for (const arg of args) {
        console.log(arg)
    }
    args.forEach((arg) => console.log(arg))
}

printAll('dream', 'coding', 'ellie')

// 5. Local scope
//  밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다
//  지역변수, 글로벌 변수 개념
// 중첩된 함수에서 자식의 함수가 부모에 정의된 변수에 접근 가능한 것들이 Closer 이다

6. Return a value

7. Early return, early exit : 조건이 맞지 않을 때 빨리 return 하여 함수 종료
bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic
    }
}

good
function upgradeUser(user) {
    if (user.point <= 10) {
        // long upgrade logic
    }
}

8. 함수에 이름이 없는 것 : anonymoun function

9. Callback function using function expression

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes()
    } else {
        printNo()
    }
}

//anonymouns function
const printYes = function() {
    console.log('yse!')
}
//named function
const printNo = function print() {
    console.log('no!')
}


10. IIFE : Immediately Invoked Function Expresstion, 선언과 동시에 실행, 최근 잘 쓰이진 않음
(function hello() {
    console.log('IIFE')
})();