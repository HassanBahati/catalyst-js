//This is  how Javascript declarations are done. Constants remain unchanged.
var name;
let age;
const salary = 202020
//This is Javascript datatype called string. Assigning var with string values.
name = " ozzy sue george"

//This is printing variables defined or printing messages that needs to be displayed to the user.
console.log(name);
//Breaking in javascript.
console.log("<br/>");

//The opreator modulous (reminder) interprets the difference in values. 
var orange = 20;
orange%2==0?'odd':'even'
//Output message to be displayed on the screen is orange.
console.log(orange)
//Variable not declared with data type.
var name;
//This is an array, whiCh is a collection of numbers or values.
var mystuff = [20,30,40,[50,60,[70,80,[90,100,[120,200]]]]]
//Defining or counting the position of values in an array.
console.log(mystuff[3][2][2][1])           
//Varaible declared number 30.
var num =30;
//Variable of  num2 are an array.
var num2 = num >mystuff[2]?mystuff[3][1]:mystuff[2]
//Output answer value of num2 to be dispalyed.
console.log(num2)
//Variable reassigned to point to different strings.
name = "joanita paul ozzy "
//Output of reassigned value names to be displayed.
console.log(name)
//Variable declared with no initial value.undefined.
var age;
//Variable declared with no initial value/undefined.
var name;
//Assignged number to point to declared variable var age;
age = 50;
//Assigned string to point to declared variable var name;
name = "Kyalo monica nicholus"
/*
Commenting out code.
*/
document.write("My name is " +name +" "+ "and I am "+age+" "+" years old");

//Variable declared with no intial value
var x;
//Declaring and pointing value to variable Var x;
document.write(x);
//The undefined property indicates that a variable has not been assigned a value,  ... 
var x = undefined;
//Output will show that property has no value
console.log(typeof(x));
