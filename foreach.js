// const arr =[
//     {name: 'Alice', age: 25},
//     {name: 'Bob', age: 30},     
// ]
// arr.forEach(element => {
//     console.log(element.name);
    
// });
// const codding =[
//     "JavaScript",
//     "Python",
//     "Java"
// ]
   
// const values = codding.forEach((item)=>{
//     console.log(item) 
// })
// console.log(values); // undefined, because forEach does not return a value

const numbers = [1, 2, 3, 4, 5];
const number = numbers.filter((num )=>num >4)
console.log(number);

const myNumbers = [1, 2, 3, 4, 5];

const newNums= myNumbers
.map((num)=> num * 10)
.map((num)=> num + 1)
.filter((num)=> num > 40)
console.log(newNums);
