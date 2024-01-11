const {findLargest}=require("./functions")

test("The sum of two numbers", ()=>{
    expect(2+2).toEqual(4)
})

//find the largest number's index in an array
//test suite

describe("findLargest",()=>{

it("whether it is there or not",()=>{
    expect(findLargest).toBeDefined();
})

it("whether it is a function or not",()=>{
    expect(findLargest instanceof Function).toEqual(true)
})

it("returns a number",()=>{
    expect(typeof findLargest()=='number').toEqual(true)
})

it("returns a number",()=>{
    expect(typeof findLargest()).toEqual('number')

})

it("returns the largest value's index",()=>{
    expect(findLargest([1,1,-4,2])).toEqual(3);
})

it("returns -1 if no values are passed",()=>{
    expect(findLargest([])).toEqual(-1)
})
})