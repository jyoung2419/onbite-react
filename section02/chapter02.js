// 1. 단락 평가
// 첫 번째 연산자로 연산의 결과값이 확정이 된다면 두 번째 연산자는 호출하지 않음
function returnFalse(){
    console.log("False 함수");
    return false;
}

function returnTrue(){
    console.log("True 함수");
    return true;
}

// console.log(returnFalse() && returnTrue()); // 단락 평가로 인해서 첫번째 피연산자의 값만 출력 (두 번째는 아예 무시)

// // undefined 일 때
// function returnFalse2(){
//     console.log("False 함수");
//     return undefined;
// }

// function returnTrue2(){
//     console.log("True 함수");
//     return 10;
// }

// console.log(returnFalse2() && returnTrue2());


// 2. 단락 평가 활용 사례
function printName(person){
    const name = person && person.name;
    console.log(name || " person의 값이 없음");
}

printName();
printName({name : "정진영"});