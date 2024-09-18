


let para = document.getElementById('para1');
let button = document.getElementById('myButton');


para.textContent = 'Updated paragraph text.';
button.addEventListener('input',function(){

    para.textContent = 'Paragraph text changed on button click';

});

let newElement = document.createElement('p');
newElement.textContent = 'New Paragraph added';
document.getElementById('container').appendChild(newElement);








//...................................................................................
//...................................................................................

// let car = new Object();

// car.make = "Toyota";
// car.model = "Corolla";

// console.log(car.make);
// console.log(car.model);


//....................................................................................
//....................................................................................

// let add = {
//     name: "Mehedi",
//     age: 24,
//     greet: function(){
//         console.log("Hello",this.name);
//     }
// }

// console.log(add.name);

// console.log(add["age"]);

// add.age = 25;

// console.log(add.age);


// console.log(add.greet());







