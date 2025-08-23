// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];  // ...을 통해서 arr1을 arr2에 흩뿌려라
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};

console.log(obj2)

function funcA(p1,p2,p3){
    console.log(p1,p2,p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
function funcB(one, ...rest){   // rest 매개변수(...rest)가 맨 뒤에 와야 함
    console.log(rest);
}

funcB(...arr1)