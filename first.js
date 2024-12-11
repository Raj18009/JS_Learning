console.log("Hello Javascript!!!!")

var browser = "Edge"; // the problem with var is we can redeclare it 
var browser = "Chrome"; // var is function scoped
browser = "Firefox";
console.log(browser);

 var g;
 console.log(g);

 let p;
 console.log(p);

 const l=1;
 console.log(l);


 // let --> let veariable is block scoped. After the block, we can't use it
 
 let m = "hello tom"; // declared globally
 let time = 4;          // declared globally
 if(time > 3){            
    let msg = "how r u?";    // declared within the block
    console.log(msg);
 }
 // console.log(msg); will give error as msg is defined inside the block

// both let and const have block level scope
if (true) {
   let x = 10;
   const y = 20;
   console.log(x);  // 10
   console.log(y);  // 20
 }
 //console.log(x);  // ReferenceError: x is not defined
 // console.log(y);  // ReferenceError: y is not defined
 


 // let len = 4;  will give error as we can't re-declare it
//  let len = 5;

// although, we can re-initiaize it 
let len = 5;
len = 21;
console.log(len);

// const --> constant values can't be reassigned or modified after initialization
/*const te = "hello tata";
te = " bye tata";
console.log(te); */
 //const p;
 console.log(p);

// Immutability: Variables declared with const cannot be reassigned, 
//but their contents (if an object or array) can still be mutated

const person = { name: "andrew" };
person.name = "Garfield";
console.log(person.name); // output : garfield


