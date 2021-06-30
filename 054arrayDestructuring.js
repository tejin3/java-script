//Array Destructuring

function getScores() {
    return [70, 21, 100, 50, 12, 33, 45];
}

var [x, y, ...args] = getScores();
console.log(args);
console.log(getScores());

// 두개만 이름 할당되고 나머지는 args에 배열로 담긴다.

// console.log(x);
// console.log(y);
// console.log(z);

// score[0];
// score[1];
// score[2];


function getPerson() {
    return [
        "Jhon",
        "Doe",
        ["Red", "Green", "Blue"]
    ];
}

var [firstName, lastName, [color1, color2, color3]] = getPerson();
console.log(color1);

var [firstName, lastName, favoritcolor] = getPerson();
console.log(firstName);

console.log(favoritcolor);



// 지리정보.   위도 경도.
//외부라이브러리 로 위도 경도 리턴해주는 경우 많음
//리턴을 배열 형태로 주는 경우가 많음
//[위도, 경도];


function getCoordinates() {
    return [12.1231424, 43.123123];
}

var coordinates = getCoordinates(); //[경도, 위도]
coordinates[0]; //경도
coordinates[1]; //위도
//쓰다보면 경도인지 위도인지 해깔림.


var [longititue, latitude] = getCoordinates(); //[경도, 위도]