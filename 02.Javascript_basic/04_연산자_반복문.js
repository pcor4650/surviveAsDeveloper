// 1. String concatenation

// 2. Numeric operator

// 3, Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter+1
// preIncrement = counter
const postIncrement = counter++;
// postIncrement = counter
// counter = counter + 1

// 4. Assignment operator
// +=, -=, *=, %=,

// 5. Comparison operator

// 6. Logical operator
// || : 조건 중 앞에 true가 있으면 뒤에 있는 것은 연산하지 않는다
// && : 마찬가지

// ! : not 연산자

// 7. Equality

// == : loose equality, with type conversion
// === : strict equality, no type conversion

// oobjcet equality by reference, 오브젝트는 메모리에 저장될 때 레퍼런스의 형태로 저장된다.
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie2);

// 8. Conditional operator: if
// if, else if, if

// 9. Ternary operator: ?
// condition ? value1 : value2;

// 10. switch statment
//  use for multiple if checks

const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;

  case "CHROME":
  case "FIREFOX":
    console.log("love you~!");
    break;
  default:
    console.log("unknown browser!");
    break;
}

// 11. Loop
// while loop, while the condition is truty,
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do while looop, body cod is executed first
// then check the condition

do {
  console.log(`do whle: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)

for (let i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
  i--;
}

// nested loops

// loop안에서 break, continue 사용하여 loop를 끝낼 수 있다.
// break :
// continue : 해당 loop만 스킵하고 다음 스텝으로 넘어간다.

// Q1. iterate from 0 to 10 and print only even numbers (use continue)
{
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 1) continue;
    console.log(i);
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
{
  for (let i = 0; i <= 10; i++) {
    if (i === 8) break;
    console.log(i);
  }
}
