
const meraarry = [1,2,3,4,5,6,7,8,9,10];
function konsaarry(arr)
{
    return arr[1]
}
console.log(konsaarry(meraarry));
let a= 10;
const b = 20;
var c = 30;

if (true ){

}
console.log(a);
console.log(b)
console.log(c);

function one () {
   const a = 10;
   function two() {
      const b = 20;
      console.log(a, b);
      function three() {
         const c = 30;
         console.log(a, b, c);
      }
      three();
   }
   two();
}
one();    

function addon (num ){
    return num +1
}
console.log(addon(5))


const addon2 = function (num){
    return num + 2
}
console.log(addon2(5))