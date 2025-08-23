// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person= {
    name: "정진영",
    age: 24,
    hobby: "테니스"
};

let {
    name,
    age:myAge,
    hobby,
    extra = "hello"
} = person;
// console.log(name, myAge, hobby, extra);


// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) =>{    // () 안에 중괄호를 사용해서 구조분해할당을 명시
    console.log(name, age, hobby, extra);
}

func(person);