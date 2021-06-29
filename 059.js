//가장 어려운
//정규식    
//regular expression

// var txt = "Hello World! world!";

// var regexp = /World/gi; // g전부 찾아  i대소문자 구분말고

// console.log(txt.replace("World", "Jeremy"));

// console.log(txt.replace(regexp, "Jeremy"));


// var str = "12312fds123dgg";
// var regexp1 = /[0-9]/g;
// var result = str.match(regexp1); //문자열에서 내가 찾고자 하는걸 찾으면 하나하나 배열에 배치
// console.log(result);

// var str2 = "re, green, red, gree, gen, yello, blue";
// var regexp2 = /(red|green)/g;
// var result2 = str2.match(regexp2); //문자열에서 내가 찾고자 하는걸 찾으면 하나하나 배열에 배치
// console.log(result2);


// var tel = "010-3008-9614";
// //3자리 숫자 - 4자리 숫자 - 4자리
// var regexp3 = /^(010)-\d{4}-\d{4}/; //^시작이 무조건 010으로 시작하게해햐되   //   \d = 0~9
// console.log(regexp3.test(tel));

// var tel = "011-3008-9614";
// //3자리 숫자 - 4자리 숫자 - 4자리
// var regexp3 = /^(010)-\d{4}-\d{4}/; //^시작이 무조건 010으로 시작하게해햐되   //   \d = 0~9
// console.log(regexp3.test(tel));
// var tel = "0103008-9614";
// //3자리 숫자 - 4자리 숫자 - 4자리
// var regexp3 = /^(010)-\d{4}-\d{4}/; //^시작이 무조건 010으로 시작하게해햐되   //   \d = 0~9
// console.log(regexp3.test(tel));


//전화번호 형식
//이메일 주소 형식

//seungwon.go@gmail.com
//aaa234@abc.co.kr
//afef@foeof - 없음
var regexp4 = /^(\w+\d*)+@\W+(\.\w{2,3})+$/;
//  \w 문자   \w+문자가 최소한 하나이상 들어거야 한다  \. 이렇게해야 . 인식  $무조건 끝난다.

console.log(regexp4.test("seun3333@gmail.com"));

//글로벌 나가면 우편번호 체계가 다 다르다. 
//계좌번호도 다 다르다.
//제대로 작성했는지 체크할려면 나라마다 다르게 정규식 작성해서 체크해야한다