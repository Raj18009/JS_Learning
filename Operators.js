let x=10, y=20;
//Arithmetic operators
console.log(x+y);
console.log(y-x);
console.log(x*y);
console.log(y/x);
console.log(y%x);
console.log(x**y);

x=x+1;
console.log(x);

x+=1
console.log(x);

// Assignment operators
x=100;
y=50;

//x=x+y;
//console.log(x);

x+=y;
console.log(x);

// Relational / comparison operators - always return a boolean value - True or False
x=10;
y=20;
console.log(x==y);
console.log(x===y);
console.log(x!=	y);
console.log(x!==y);
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x<y?x:y); // if x is less than y, then x will be printed else y will be printed

//JavaScript Logical Operators -->  && (and),  || (or),  ! (not)

let a = true;
let b = false;
let c = true;
let d = false;

console.log(a && b); // returns true when both are true
console.log(a && c);
console.log(a && d);

console.log(a || b); // returns true when eithe one if them is true
console.log(a || c);
console.log(a || d);

console.log(!a); // negation operator
console.log(!b);




