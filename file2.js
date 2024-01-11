const {sum, subtraction}=require("./file1.js")

const colors=require('ansi-colors')

console.log(colors.red("This is a red String!"))

console.log(sum(2,3))

console.log(subtraction(6,3))


//object destructuring
const people={
    firstName:"Astha",
    lastName:"Shaw",
    age:56
}

let {firstName, age, gender="female"}=people
console.log(firstName+" "+age+gender)

function print(people){
    console.log(`The name is:${people.firstName} and age is ${people.age}`)
}

function printDetails({firstName, age}){
    console.log(`The name is:${firstName} and age is ${age}`)
}
print(people)
printDetails(people)