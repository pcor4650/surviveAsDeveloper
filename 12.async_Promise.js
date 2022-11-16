// 비동기의 꽃 async&gawait, 깔끔하게 promise를 좀더 간단히 사용할 수 있는 syntactic sugar이다, 둘 중에 뭘 사용할지는 케바케
// 드림코딩 : https://www.youtube.com/watch?v=aoQSOZfz3vQ
// 강의노트 : github.com/dream-ellie/learn-javascript

// 1. async : 함수 앞에 async라는 키워드를 붙여준다
function fetchUser() {
	// do network request in 10 secs....
	return new Promise((resolve, reject) => {
		resolve('parkcha'); 	
	});	
}

async function fetchUser() {
	// do network request in 10 secs....
	return 'parkcha';  
}

const user = fetchUser();	  //자바스크립트는 동기적으로 동작하기에 해당 라인이 수행되어야 그 다음 라인으로 넘어간다.
user.then(console.log);
console.log(user);		//아래는 무슨 죄?

// 2. await
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(2000);
	throw 'error';		//에러가 핸들링은 어떻게 해야할까 try~catch로
	return 'apple';
}

async function getBanana() {
	await delay(1000);
	return 'Banana';
}

function pickFruits() {
	return getApple().then(apple => {
		return getBanana.then(banana => `${apple} + ${banana}`);
	});
}	// callback 지옥과 비슷 아래와 같이 수정

async function pickFruits() {
	try{
		const applePromise = getApple();
		const bananaPromise = getBanana();
		const apple = await applePromise;			// 각각 await로 getApple(), getBanana() 실행하면 2초 딜레이 후 결과 출력됨 -> 비효율적 -> 근데 이렇게 더럽게 작성X
		const banana= await bananaPromise;
	}catch{
		
	}
	return `${apple} + ${banana}`;
	}
	
	
// 3. useful Promise APIs
//여러 프로미스 다 기다린 후 한꺼번에 처리하고 싶을 때
function pickAllFruit() {
	return Promise.all([getApple(), getBanana()]).then(fruits =>
		fruits.join(' + ' )
	);		
}
pickAllFruit().then(console.log);

//가장 빠르게 처리된 프로미스만 처리하고 싶을 때
function pickOnlyOne() {
	return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log)


