// 링크 : https://www.youtube.com/watch?v=1Lbr29tzAA8&t=166s

// Object는 키와 밸류의 집합이다

// 1. 객체 생성 방법
const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

// 2. Computed properties
ellie['name'];

// 3. Property value shorthand

const person4 = new Person('parkcha', 36);

// 4. Constructor Function
function Person(name, age) {
    //this = {}
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator
'name' in ellie;    // name이라는 key가 ellie라는 object에 있는지 확인

// 6. for..in vs for..of
for (key in obj)

for (key in ellie) {
    console.log(key)    // 모든 키를 받아와서 처리하고 싶을 때
}

for (value of iterable)

// 7. Fun cloning
const user = {name: 'ellie', age: '20'}
const user2 = user
user2.name = 'coder'    //user의 name 도 바뀐다

// 객체 복사 old way
const user3 = {}
for (key in user) {
    user3[key] = user[key]
}

user4 = {}
Object.assign(user4, user)
user4 = Object.assign({}, user)