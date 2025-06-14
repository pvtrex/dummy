const user = {
  name: "John Doe",
  price: 100, 
  welcome: function() {
    console.log(`Welcome, ${this.name}! Your price is $${this.price}.`);
    console.log(this);
    
  }

}
user.welcome();
user.name = "Jane Smith";
user.price = 150;
user.welcome();
function chai(){
    console.log(this);
}
chai()

const addtwo = (a, b) => {
  return a + b + 2; 
}
(function chai (){
    console.log("hhe");
})();
( (name)=>{
    console.log(` i am ${name} `);
})("rex");