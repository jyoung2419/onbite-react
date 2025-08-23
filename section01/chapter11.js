// 함수 선언

function greeting(){
    console.log("안녕하세요!");
}

console.log("호출 전");
greeting(); // 함수 호출. 반드시 소괄호와 함께 호출
console.log("호출 후");

// 매개변수를 통해 동적으로 할당
function getArea(width, height){    // 매개변수가 포함된 함수
    function another(){     // 중첩 함수
        console.log("another");    
    }
    another();
    let area = width * height;

    return area;
}

let area1 = getArea(10, 20);
console.log(area1);

getArea(100, 20);

// 호이스팅
// -> 끌어올리다 라는 뜻, 선언문을 호출문보다 아래 두어도 오류가 발생하지 않음