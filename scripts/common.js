/**
 * 참조 목록에서 나이대별로 분류 후 몇명인지 카운트
 * @param {object} userList  참조목록
 * @param {} keyAge 나이 값이 들어있는 키 이름
 * @returns  10단위로 나눈 나이 분류 : 해당 분류에 몇명이나 포함되는지
 */
function getAgeGroup(userList, keyAge) {
    let userAgeGroup = {};
    //25
    for (var user of userList) {
        // var ageGroup = user.age.toString().charAt(0) + "0"; //20

        // //치명적인 문제 4살 - 40대 , 100살 이상 - 10대
        var ageGroup = "";
        if (user[keyAge] < 10) {
            ageGroup = "0";
        } else if (user[keyAge] >= 100) {
            ageGroup = user[keyAge].toString().substr(0, 2) + "0";

        } else {
            ageGroup = user[keyAge].toString().charAt(0) + "0";
        }


        if (userAgeGroup[ageGroup]) {
            userAgeGroup[ageGroup] += 1;
        } else {
            userAgeGroup[ageGroup] = 1;
        }
    }
    return userAgeGroup;

}
// console.log(getAgeGroup());




// 최소값과 최대값 사이의 랜덤한 값 얻는 함수
/**
 * 최소값과 최대값을 파라미터로 받고 그 사이의 무작위(random) 정수 값을 반환하는 함수
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number} min 과 max 사이의 랜덤 정수 값
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/**
 * 
 * @param {*} userRsp 
 * @returns 
 */
function rspPlayer(userRsp) {

    const rsp = ["가위", "바위", "보"];

    // var playRspNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;


    // var playRsp = arrRsp[playRspNum];

    const playerRsp = rsp[getRandomInteger(0, 2)];

    const winValue = {
        "가위": "보",
        "바위": "가위",
        "보": "바위"
    }

    return {
        "userRsp": userRsp,
        "playerRsp": playerRsp,
        "winner": (userRsp == playerRsp) ? 0 : (winValue[userRsp] == playerRsp) ? 1 : -1
    }
}


// console.table(rspPlayer("가위"));