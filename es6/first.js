// Given an array const a = [1, 3, 5, 2, 4] generate an array result1 from a, which should be equal to [1, 5, 4]. The solution should be of the form: 

// const result1 = a.<your code here>

const array = [1, 3, 5, 2, 4] 
const evenIndexElements = array.filter((num, index) => index % 2 == 0);
console.log(evenIndexElements);

//take this code & put it in web browser console