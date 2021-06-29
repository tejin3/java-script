//Spread Operator
//배열, 문자열같은 형태의 데이터 요소 하나 하나 모두 분리해서 사용할 수 있게 해주는 문법

var arr1 = [4, 5, 6];
var arr2 = [1, 2, 3];

var arr3 = [...arr2, ...arr1]; // ...arr1 로 된 순간 각각의 요소로 분해
//1,2,3,4,5,6

var cd = "CDEFG";
var alphabet = ["A", "B", ...cd]; //A,B,C,D,E,F,G

console.log(arr3);
console.log(alphabet);