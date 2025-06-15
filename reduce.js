// const myNumbers = [1, 2, 3, 4, 5];

// const newNums= myNumbers
// .map((num)=> num * 10)
// .map((num)=> num + 1)
// .filter((num)=> num > 40)
// console.log(newNums);

const nums =[1,2,3];

const total = nums.reduce((acc, curVal) => {
    console.log(`acc: ${acc}, curVal: ${curVal}`);
    
  return acc + curVal;
}, 0);
console.log(total); // Output: 6
