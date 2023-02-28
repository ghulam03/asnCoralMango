// Given an array const a = [1, 3, 5, 2, 4]generate an array result3 from a, which should be equal to [1, 25, 16]. The solution should be of the form: 

// const result3 = a.<your code here>


const array = [1, 3, 5, 2, 4] 
const evenIndexElements = array.filter((num, index) => index % 2 == 0);
const finalArray=evenIndexElements.map((i)=>i*i)
console.log(finalArray);
console.log(evenIndexElements);


//take this code & put it in web browser console