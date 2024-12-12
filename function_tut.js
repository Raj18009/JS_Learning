// JavaScript Functions
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// A Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
  }
  let result = myFunction(4, 3);
  console.log(result);

// A function to compute the addition of q1 & q2
function addition(q1, q2){
    return q1+q2;
}
let result1 = addition(8, 10);
 console.log(result1);

// exapmle 3
let xyz = myFunction(4, 3);
function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}
console.log(xyz);

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
    console.log(carName);
  }
  // console.log(carName); can't use carName here

