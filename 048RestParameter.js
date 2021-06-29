//Rest Parameter  유용
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