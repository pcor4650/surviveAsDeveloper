// 모르면 후회하는 배열함수 : https://www.youtube.com/watch?v=3CUjtKJ7PJg
// 시청 전 퀴즈 : https://drive.google.com/file/d/1smYHFS5fbgdyGHjBmXx2P-IyY3VWJ9tm/view

// Q1. make a string out of an array, 배열을 string으로 변환
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
  }

  
  // Q2. make an array out of a string, string을 배열로 변환
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',') //separator와 limit 설정
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5)
    const array_splice = array.splice(0, 2)     //확인해볼것
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled것
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    const result = students.find((student)=>studnent.score === 90);
  }
  
  // Q6. make an array of enrolled students
  {
    const result = studnents.filter((student) => student.enrolled);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score)
    console.log(result)
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result = students.some((student) => student.score < 50);
    console.log(result)
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2)
    }
  
  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) => {    //reduce 배열 순차적으로 돌면서 누적작업 할 때
        console.log('------');                          //reduceRight
        console.log(prev)
        console.log(curr)
        return prev + curr.score;
    }, 0)
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
    .map((student)=> student.score)
    .filter((score) => score >= 50)
    .join()
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
     const result = students
     .map((student)=> student.score)
     .sort((a, b) => a - b)
     .join()
  }