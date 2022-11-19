// 배열개념과API정리 : https://www.youtube.com/watch?v=yOdAVDuHUKQ&t=12s

// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana']
console.log(fruits[0])
console.log(fruits[fruits.length-1])

// 3. 배열 루핑
//  a. for문

//  b. for of
 for (let fruit of fruits) {
    console.log(fruit)
 }

//  c. forEach
 fruits.forEach((fruit) => console.log(fruit))

// 4. Addition, delettion, copy
fruits.push('orange')
fruits.pop()

fruits.unshift('딸기')  //앞에서 부터 넣을 때, 느리다

// splice : remove an item by index position
fruits.splice(1, 1)
fruits.splice(1, 1, '사과', '수박')

//combine two arrays
const fruits2 = ['키위', '코코넛']
const newFruits = fruits.concat(fruits2)

// 5. 검색
//find the index
fruits.indexOf('apple')
fruits.includes('오랑게')
fruits.lastIndexOf('apple') //중복된 요소 중 마지막 인덱스 반환

// 숙제 : 배열관련 API 읽어보기
 