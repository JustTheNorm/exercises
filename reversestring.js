// const reverseString = (string) => {

const { string } = require("prop-types");

//     let reversedString = ""

//     for(let i = string.length-1; i>=0; i--){
//         reversedString += string[i]

//     }
//     console.log(reversedString) 
// }
// reverseString("hello world")
// --------------------------------------------------
// let Answer = []

// var twoSum = function(nums, target) {
//     for(let i=0; i<nums.length;i++){
//         for(let j=i+1; j<nums.length;j++){
//             if(nums[i] + nums[j] == target){
//                 Answer.push(i)
//                 Answer.push(j)
//             }
//         }
//     }
//     console.log(Answer)
//     // return Answer
// };

// twoSum([3,2,4],6)

// -------------------------------------------------------
// var isPalindrome = function(x) {
//     let integer = x.toString()
//     let reversedInteger = ""
    
//     for (let i=integer.length-1;i>=0;i--){
//         reversedInteger += integer[i]
//         // console.log(integer[i])
//     }
//     // console.log(reversedInteger)
//     if (reversedInteger === integer){
        
//         return true
//     }
//     else{
//         return false
//     }

    

// };

// isPalindrome(121)

// ---------------------------------
var addTwoNumbers = function(l1, l2) {
    let newl1 = []
    let newl2 = []
    let answer = []
    let reverseAnswer = []
    for(let i=l1.length-1; i>=0;i--){
        newl1 += l1[i]
    }
    // console.log(newl1)
    for(let j=l1.length-1; j>=0;j--){
        newl2 += l2[j]
    }
    // console.log(newl2)
    answer = parseInt(newl1) + parseInt(newl2)
    answer = answer.toString()
    // console.log(answer)
    for(let k=answer.length-1; k>=0;k--){
        reverseAnswer += answer[k]
    }
    // console.log(reverseAnswer)
    let answerArr = String(reverseAnswer).split("").map((reverseAnswer)=>{
        return reverseAnswer
    })
    console.log(answerArr)
    return answerArr

    
};

addTwoNumbers([2,4,3],[5,6,4])