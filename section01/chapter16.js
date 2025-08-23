// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이" // 수정
delete animal.color; // 삭제

console.log(animal);
// 상수 객체에서 에서 프로퍼티 추가, 수정, 삭제 모두 가능

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "정진영",
    // 메서드
    sayHi() {
        console.log("hi!!");
    }
}

person.sayHi();
person["sayHi"]();