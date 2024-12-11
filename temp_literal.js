
// Interpolation: Insert expressions directly into the string using the ${} syntax.

// Variables are Containers for Storing Data


    const realName = "Alice"
    const age = 25;
    console.log(`Hello, my ${realName} and I am ${age} years old`);

// Multiline Strings: Easily create multiline strings without needing escape characters like \n    

    const multiline = `     
                        This is line 1
                        This is line 2
                        & This is line 3`;
        console.log(multiline);

// Expression Evaluation: You can include any JavaScript expression, including functions or arithmetic operations

    console.log(`The result of 5+3 is ${5+3}`);

    console.log(`The result of ${(5 + 6) * 10} is`);

    let x,y;
    x = 10 + 5;
    y = x * 5;
    console.log(y);

    carName = "Volvo"; //hoisting 
        var carName;          // let do not supports hoisting
        console.log(carName);

// Const Arrays
const cars = ["volvo", "subaru", "BMW"]
cars[0] = "Toyota";
console.log(cars);

cars.push("Audi");
console.log(cars);

cars.pop();
console.log(cars);  

cars.push("Mahindra");
console.log(cars);  

cars.pop();
console.log(cars);  

// const objects

const car = {type : "SUV", model : "2023", color: "black"}
console.log(car);

car.color = "Matt black";
console.log(car);

car.owner = "The king";
console.log(car);
