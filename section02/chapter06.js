// 1. 배열 순회
let arr = [1,2,3];

// 1.1 배열 인덱스
for (let i=0; i<arr.length; i++){
    // console.log(arr[i]);
}

let arr2 = [4,5,6,7,8];
for (let i=0; i<arr2.length; i++){
    // console.log(arr2[i]);
}

// 1.2 for of 반복문
for(let item of arr){
    // console.log(item)
}

// 1.3 객체 순회
let person = {
    name : "정진영",
    age : 24,
    hobby: "테니스"
}

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for(let key of keys){   // 배열을 순회할 때는 of
    const value = person[key];  // value 값도 순회 가능
    // console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for(let value of values){
    // console.log(value);
}

// 2.3 for in
for(let key in person){ // 객체를 순회할 때는 in
    const value = person[key];
    console.log(key, value);
}