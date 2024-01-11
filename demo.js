console.log("Hello World")

//string ->single line comment

/* */ //->multiline comments
// We are learning js

//string
//JS says have your variable names in camelcase
//broken_string -snake case
//BrokenString-Pascal case
//const brokenString='I'm a broken string'

const brokenString1= "I'm a broken string"

const brokenString2= `I'm a broken string ${brokenString1}`

const brokenString3='I\'m a broken string'

//Absence

//null-no value at all, not 

let value=null


console.log(-1/0)
console.log(1/0)
console.log(0/0)

//undefined- av value that does not exist at the moment
let number;
console.log(number);

//NaN-Not a number, result of doing impossible math

let number1=parseInt("Hello")
let number2=parseInt("1")
console.log(number1)
console.log(number2)

const value1=5;
// value1=6
console.log(value1)

console.log(1=='1');//true

console.log(1==='1');//false

//Quiz
console.log("------QUIZ-------")
console.log(true && false)//false
console.log(3>2||3<2)//true
console.log((("true"||0) && !(false && 3<4)) || (-8+3))//true
console.log(false||3<4||13) //true
console.log(4!=5 && !(!(false)))//false
console.log(!(null && undefined))//true

console.log("----conditional statements-----")

function measuringCake(){
const cake="chocolate"

if(cake=="chocolate"){
    console.log("Delicious")
}
else if(cake=="red valvet"){
    console.log("Okayish")
}
else{
    console.log("Not interested")
}
}


measuringCake()


function example(num){
    if(num >= 11){
        return 'High'
    } else if (num < 3){
        return 'Low'
    } else if(num >= 3 && num <11 && num !== 7){
        return 'Medium'
    } else if(num === 7){
        return 'Exact'
    }
}



console.log(example(7))


const example1=(num)=>{
    if(num >= 11){
        return 'High'
    } else if (num < 3){
        return 'Low'
    } else if(num >= 3 && num <11 && num !== 7){
        return 'Medium'
    } else if(num === 7){
        return 'Exact'
    }
}



console.log(example1(7))

function square(num){
    return num*num;
}

console.log(square(6))

//using arrow operators

const square1=num=>num*num;

console.log(square1(6))


//ypu want to check which number is greater out of number1 and number2

function greatestValue(number1, number2){
    if(number1>number2){
        return number1
    }else{
       return  number2;
    }
}

console.log(greatestValue(5,6));

//ternary operators

const greatestValue1=(number1,number2)=>number1>number2 ? number1 : number2;

console.log(greatestValue1(5,6));


//Loops

//Nice!
// for(let i=0;i!=NaN;i++){
//     console.log(i)
// }

let count=0

let postincrement=count++;
console.log("postincrement"+postincrement)

let preincrement=++count;
console.log("preincrement"+preincrement)

while(count<10){
//post increment and pre-increment operators
//count++ and ++ count both will do count=count+1 but sequence would be a bit different

    debugger;

    count++;
    console.log(count)
    // if(count==10){
    //     break;
    // }
}


//Arrays-ordered, indexed and mutable

let numbers=[1,2,"rahma"] //arrays always start with index 0
//index=0,1,2
console.log(numbers.length)
console.log(numbers[0])
console.log(numbers[1])

for(let i=0;i<=numbers.length;i++){
console.log(numbers[i])
}

console.log(numbers.indexOf("rahma")) 

console.log(numbers.indexOf("astha")) //gives -1 as the index

//push

numbers.push(5)

console.log(numbers)
numbers.push(["julian", "sarah"])
console.log(numbers)
console.log(numbers[4][1])
numbers.push(5,6)
console.log(numbers)
//pop-removing the last element of the array
console.log("pop::"+numbers.pop())
//shift-removes from the first element of the array and shifts all the other elements at the lower index
console.log("shift::"+numbers.shift())

//unshift-adding a new element to the beginning
console.log("unshift::"+numbers.unshift("Jessica"))

//concat
let str=["Nishan", "Ope", "Rares"]
numbers=numbers.concat(str)
console.log("After concatenation:::"+numbers)
//console.log("Concatenation::"+numbers.concat(str))
console.log("Join::"+numbers.join("*"))


for(let i of numbers){
    console.log(i)
}

//forEach
console.log("---forEach---")
numbers.forEach((values)=>console.log(values))

//splice

//remove
console.log(numbers)
console.log("---SPLICE---")
console.log(numbers.splice(0,2)) //0->start 2->number of elements you want to get rid of
console.log(numbers)

//insert
console.log(numbers.splice(0,2,"Charlotte", "Si"))
console.log(numbers)

//Objects

const people={
    firstName:"Astha",
    lastName:"Shaw",
    age:56
}

const guthrie_hybrid=[
    { name:"Astha", marks:5},
    { name:"Julian", marks:10},
    { name:"Ravil", marks:9},
    { name:"Simon", marks:6},
    { name:"Sarah", marks:7}
]

//I want students who scored greater than 8
const filteredStudents=guthrie_hybrid.filter((student)=>{
     return student.marks>=8
})

console.log(filteredStudents)

//map

const studentNames=guthrie_hybrid.map((student)=>{
    return student.name;
})

console.log(studentNames)


const hasNameAstha=guthrie_hybrid.find((student)=>{
    return student.name=='Astha'
})

console.log(hasNameAstha)


