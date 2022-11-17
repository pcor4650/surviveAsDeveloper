// JSON
// JSON : JavaScript Object Notation, Object {KeyboardEvent, value}
// 링크 : https://www.youtube.com/watch?v=FN_D4Ihs3LE&t=675s

// HTTP : Hypertext Transfer Protocol, Server <-> Client



// object -> JSON(string) : sirialize
// JSON(string) -> object : deserialize

// 1. Object to JSON 방법
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json)       //브라우저에서 결과 확인


//토끼라는 객체 만들어서 JSON 변환 확인
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`)
    },
}
json = JSON.stringify(rabbit줌
console.log(json)

json = JSON.stringify(rabbit,['name', 'color'])  //name만 변환하고 싶으면
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    // return value
    return key === 'name' ? 'ellie' : value;
})

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit)
const obj = JSON.parse(json)
console.log(obj)
rabbit.jump();
obj.jump()      // 에러발생

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    // return value
    return key=== 'birthDate' ? new Date(value) : value;
})


// 유용한 사이트
//  - JSON Diff(jsondiff.com)
//  - JSON Beautifier : JSON 붙여넣기 할 때 가동성 좋게 
//  - JSON Parser : JSON으로부터 객체가 어떻게 표기되는지 확인 가능
//  - JSON Validator : JSON 이상한 부분 찾아줌