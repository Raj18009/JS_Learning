// 1. Define an object representing a student with properties for name, age, grade, 
// and a method to display student information.
let student = {
    name: "Andrew",
    age: 21,
    grade: "A",
    info: function() {
        console.log(`${this.name} ${this.age} ${this.grade}`); // or we can break down this and print like below
        console.log(`Student Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
};
        student.info();

    
    

        