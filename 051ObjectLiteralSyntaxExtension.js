//Object Literal Syntax Extension

var firstName = "Jhon";
var lastName = "Doe"


var person = {
    firstName: firstName,
    lastName: lastName
}

var type = "student";
var score = {
    [type]: "Jhon Doe",
    // student : "Jhon Doe" 위 아래 같음.
    score: 95
};

// score.student
// score["student"]
// score[type]