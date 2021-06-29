//Template Literals
//문자열에 내가 원하는 파라미터를 넣을 때 `` 빽틱 키호를 쓰고 그 안에    `   ${파라미터}   `

//Hello Jeremy. Welcome!
function hello(name) {
    console.log("Hello" + name + ". Welcome!");
}

//back tick
function hello2(name, name2 = "Jeremy") {
    console.log(`Hello ${name}. Welcome ${name2}`);
}

hello2("Jeremy");