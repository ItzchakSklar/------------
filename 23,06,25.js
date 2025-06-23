// const { useCallback } = require("react");

// //תרגול כיתה 1
// const [, , name, age] = process.argv;
// const upperName = name.toUpperCase();
// const currentYear = new Date().getFullYear();
// const birthYear = currentYear - Number(age);
// console.log(`Name in uppercase: ${upperName}`)
// console.log(`Estimated birth year: ${birthYear}`);
// console.log()

// exercise 1
console.log("exercise 1")
let a = "some string";
let b = "other string";
console.log(`a: ${a} b: ${b}`);
[a,b] = [b,a];
console.log(`a: ${a} b: ${b}`);
console.log();

// exercise 2
console.log("exercise 2");
let metrix_2 = [["w","X","x"],["X","a","B"],["n","N","X"]];
console.log(metrix_2)
let counter_2 = 0;
let X_logs_2 = "";
for (let i =0; i<metrix_2.length; i++)
    for (let k = 0; k < metrix_2[i].length ; k++)
    {
        // console.log(metrix_2[i][k]);
        if (metrix_2[i][k] == "X")
        {
            counter_2++;
            X_logs_2 += `${i},${k} `;
        }
    }
console.log(`sum of X is: ${counter_2}`);
console.log(`the index of X is: ${X_logs_2}`);
console.log();

// exercise 3
console.log("exercise 3");
const family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
console.log(family.children[2].name)
let family_string_3 = "";
for (let i = 0; i < family.children.length; i++)
    family_string_3 += family.children[i].name+",";
console.log(family_string_3);
console.log();

// exercise 4
console.log("exercise 4");
let arr_4 = ["aadf",2, 8,"fghh",9]
console.log(arr_4);
for (let i = 0; i < arr_4.length/2; i++)
{
[arr_4[i],arr_4[arr_4.length-1-i]] = [arr_4[arr_4.length-1-i],arr_4[i]]
}
console.log(arr_4);
console.log();

// exercise 5
// console.log("exercise 5");
// counter_5_numbers = 0;
// counter_5_string = 0;
// counter_5_null = 0;
// counter_5_object = 0;
// const arr_5 = [[ 87, "blue", null, { name: "Object", id: 5 }, "sky", 13, null, { name: "Object", id: 3 }, "apple", 41 ]]
// for (let i; i < arr_5.length ; i++){
// if (arr_5[i].)
// }
// console.log();

// exercise 6
console.log("exercise 6");
console.log();

// exercise 7
console.log("exercise 7");
console.log();

// exercise 8
console.log("exercise 8");
console.log();

// exercise 9
console.log("exercise 9");
console.log();

// exercise 10
console.log("exercise 10");
console.log();

// exercise 11
console.log("exercise 11");
console.log();

// exercise 12
console.log("exercise 12");
console.log();

// exercise 13
console.log("exercise 13");
console.log();

// exercise 14
console.log("exercise 14");
console.log();

// exercise 15
console.log("exercise 15");
console.log();

// exercise 16
console.log("exercise 16");
console.log();

// exercise 17
console.log("exercise 17");
console.log();

// exercise 18
console.log("exercise 18");
console.log();

// exercise 19
console.log("exercise 19");
console.log();

// exercise 20
console.log("exercise 20");
console.log();

// תרגול כיתה
// console.log("תירגול כיתה");
// let name2 = "ertyu";
// console.log(name2);
// function PrintUpper(Name) {
//     Name = Name.toUpperCase();
//     console.log(Name);
// }
// PrintUpper(name2);
// console.log();

// let age2 = 22;
// console.log("the age is:" , age2)
// function ReturnYear(age){
//     const currentYear2 = new Date().getFullYear();
//     return currentYear2 - age;
// }
// console.log("the year you born:",ReturnYear(age2))
// console.log();

// const add = (num1,num2) => {
//     return num1 + num2;
// }
// const subtract = (num1,num2) => {
//     return num1 - num2;
// }
// const multiply = (num1,num2) => {
//     return num1 * num2;
// }
// const divide = (num1,num2) => {
//     return num1 / num2;
// }
// const multiply = (num,callback) => {
//     num = 2*num;
//     num = callback(num,divide) 
//     return num;
// }
// const subtract = (num,callback) => {
//     num = num-5;
//     num = callback(num) 
//     return num;
// }
// const divide = (num) => {
//     num = num/10; 
//     return num;
// }
// function start(num,callback){
//     console.log(callback(num,subtract));
// }
// start(5,multiply);
// const arr_car = {"bmw":100,"toyoya":70,"merchedes":110,"mazraty":50,"subaro":90,"masda":85};
// const fast_cars = () =>
//     { 
//         .map((value) => {
//         if (value > 80)
//             return value;
//     }
//     )
        
//     }   
// console.log(fast_cars())
