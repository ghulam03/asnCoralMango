// Given an array const a = [1, 3, 5, 2, 4]generate an array result2 from a, which should be equal to [1, 9, 25, 4, 16]. The solution should be of the form: 

// const result2 = a.<your code here>


//solution

const array = [1, 3, 5, 2, 4] 
const resultArray=array.map((i)=>i*i)
console.log(resultArray);

//take this code & put it in web browser console