let name;
let age;
name = 'Bahati';
age = 25;

var id = 'My name is ' + name + ' and i am ' + age + ' old'; //concatenation 
var identification = `My name is ${name} and i am ${age} old` //modern way introduced in 2015 in es6 version of js

console.log(identification)
console.log(id)

//length of a string 
console.log(id.length); //getting length of a string 
console.log(identification.toUpperCase()); //changing from lower case to upper case 
console.log(id.substring(0 , 5));   //cutting out a sub string out of a longer string 
console.log(identification.split(''))  //splitting a string into an array letter by letter

const s = 'technology, computers it, code';
//splitting into full word 
console.log(s.split(', '));

//arrays
let fruits = ['apples', 'oranges', 'pears', ['pineapples', 'strawberrys']];
fruits[3][2] = ['grapes', 'mangoes']
fruits.push('vanilla');  //adds to end of the array
fruits.unshift('jackfruits'); //adds to the start of the array
fruits.pop(); //deletes last element of the array
console.log(fruits);
console.log(Array.isArray(fruits)); //checking if its an array
console.log(fruits.indexOf('jackfruits'))

const person = {
    firstName: 'John',
    lastName:'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.hobbies[1]); //pulling out using indexing
let {firstName, lastName, address:{city}, hobbies} = person; //destructuring

console.log(city); // ??? how to destructure and console.log city or state or street

person.email = 'john@gmail.com' //adding properties 
console.log(person);

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist checkup',
        isCompleted: false
    },
];
console.log(todos[1].text); //selecting 'meeting with boss ffrom the array

let todoJSON = JSON.stringify(todos);  //JSON = js object notation -
console.log(todoJSON); //changing array todo to JSON

//loops 
for(let i= 0; i <=10; i++){
    console.log(i);
    console.log(`for loop number ${i}`)
};

//while
let i = 0;
while(i < 10){
    console.log(`while loop number ${i}`);
    i++;  //0 included 
};

//high order array methods- forEach(loops through), map(create new array from array), filter(create new array based on condition)
todos.forEach(function(todo){                           //forEach takes a call back function and a variable eg todo
    console.log(todo.isCompleted);   //sorting through arrays and returns strings 
});

let todoText = todos.map(function(todo){             //sorts through and returns an array 
    return todo.text;
});
console.log(todoText);

let todoCompeleted = todos.filter(function(todo){  //returns an array that meets the given condition
    return todo.isCompleted === true;
}).map(function(todo){                        // tagging on map to be more specific - only text of completed todos
    return todo.text;
});
console.log(todoCompeleted);

//conditionals 
const x = 5;

if(x === 10){
    console.log('x is 10'); 
} else if(x > 10){
    console.log('x is greater than 10');
} else{
 console.log('x is less 10');
};

//ternary operator - shorthand if statement 
let y = 7;
var color = y > 10 ? 'red' : 'blue';
console.log(color); 

//switches -another way of evaluating conditions 
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
};

//functions
function addNums(num1, num2){
    return num1 + num2;
};
console.log(addNums(5 , 2));

const addedNums = (num1, num2) => num1 + num2;
console.log(addedNums(5, 4))


let dob = new Date();
console.log(dob);
