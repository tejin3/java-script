//Arrow Function - 화살표함수

//함수 선언식
function add() {

}

//함수 표현식
// var add = function (x1, x2) {
//var sum = x1 + x2;
//     return x1 + x2;
// };

//Arrow Function - 화살표함수
//Function 키워드  삭제
//파라미터
//한줄인 경우에 return 과 중괄호 {} 삭제가능.
//변수안에 넣어줘야됨.
var add = (x1, x2) => x1 + x2;


var add2 = function (x1, x2) {
    var sum = x1 + x2;
    return sum;
};

var add2 = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
};


function say(message) {

}

//파라미터가 하나인 경우 괄호() 생략 가능
var say = message => {};


function myFunction() {

}

var myFunction = () => {}; //파라미터 없으면 괄호() 생략 불가.