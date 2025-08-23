// promise

function add10(num){
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor

        setTimeout(() => {

            if (typeof num === 'number'){
                resolve(num + 10);
            } else{
                reject("num이 숫자가 아닙니다.")
            }

            // console.log("안녕");
            // // resolve("안녕");    // resolve 호출하면 비동기 성공
            // reject("왜 실패했는지 이유...");    // reject 호출하면 비동기 실패
        }, 2000);
    });
    return promise;
}

add10(0)
    .then((result)=>{
        console.log(result);
        return add10(result);
    })
    .then((result)=>{
        console.log(result);
        return add10(undefined);
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    });

// // then 메서드 / catch
// // -> 그 후에  / 오류 잡기
// promise
//     .then((value)=>{
//         console.log(value);
//     }).catch((error)=>{
//         console.log(error);
//     });