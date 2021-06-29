//Object Destructuring

function getPerson() {
    return {
        firstName: "Jhon",
        lastName: "Doe",
        age: 37,
        email: "jhon@gmail.com",
        city: "Jeju-si",
        country: "Republic of korea"
    };
}

var person = getPerson();
console.log(person.firstName);
console.log(person.lastName);


var {
    firstName,
    lastName
} = getPerson();
console.log(firstName);
console.log(lastName);

//var {갖고오고 싶은 값의 키 이름, 갖고오고 싶은 값의 키 이름} = 함수명
//리턴값이~



//진짜 많이 쓰임