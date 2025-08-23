// 1. 콜백함수
function main(value){
    console.log(value); // sub 함수 전체 콘솔에 출력
    value();
}

// function sub(){
//     console.log("i am sub");
// }

// main(sub);

main(() =>{
    console.log("i am sub");
});     // 화살표 함수로도 표현 가능

// 2. 콜백함수의 활용
function repeat(count, callback){
    for (let idx = 1; idx <= count; idx++){
        callback(idx);  // 반복마다 콜백 함수 호출
    }
}

// 매개변수로 콜백 함수를 전달해 원하는 동작을 정의 가능
repeat(5, function (idx){
    console.log(idx);
});

// 콜백함수를 활용해 반복 동작을 쉽게 바꿀 수 있다 
repeat(5, function (idx){
    console.log(idx * 2);
})

// 화살표 함수로도 표현이 가능하다
repeat(5, (idx) => {
    console.log(idx * 3);
})