     let person = {
                firstName: "John",
                lastName: "Cena",
                age: 32,
                profession: "wrestler"
     }
     // accessing object properties
        console.log(person["firstName"]); // way 1 to access the obj properties
        console.log(person.firstName);    // way 2 to access the obj properties
        console.log(person.lastName); 
        console.log(person.age); 
        console.log(person.profession); 

     // adding new property to the object
     person.height = 5.9;
     console.log(person.height);

     // update existing property
     person.height = 5.11;
     console.log(person.height);

     // remove the property form object
     delete person.age;
     console.log(person);
     console.log(person.age);