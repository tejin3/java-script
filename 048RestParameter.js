//Rest Parameter  유용    ...파라미터
//몇번 입력할 지 모를 때 사용하는

// function add(x1, x2) {
//     return x1 + x2;
// }

// function add1(x1, x2, x3) {
//     return x1 + x2 + x3;
// }

// function add2(x1, x2) {
//     return x1 + x2;
// }

// 계산기 몇개 입력할지 알 수 없음.

function add(...nums) { //이곳에는 파라미터가 몇개 들어올지 모르는데 10개도 상관없고 20개도 상관 없다.
    var sum = 0;
    for (var n of nums) {
        sum += n;
    }
    return sum;
}

console.log(add(2, 3, 4, 5, 6, 76, 7, 21));

//var nums = [2,3,4,5,6,76,7,21]

//Node.js 자바스크립트를 해석하고 실행 할 수 있는 실행기. 이전에는 웹에서만 실행- 웹 애플리케이션만 가능
//다양하게 활용 가능해짐. 혁명. 거의 모든걸 만들 수 있는 상황으로 변화.

//node 파일명. node 048.js