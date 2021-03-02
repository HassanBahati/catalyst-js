/*
 how do we achieve object orientation injavascript 
 class vs object 
 a class is a blueprint of an object 
 an object is an instance of a class
 class letter
    introduction letter -> 1, 2, 3, (instances)
    emplyoment/apppointment letter
    resignation letter
    nb: sub classes are called derieved classes
 */

 //objects in javascript 
 let myobject = {};
// console.log(typeof(myobject)); 
 function sum() {}
 //console.log(typeof(sum));
 let food = {
     //properties of object food
     name: 'potatoes',
     taste: 'sweet',
     price: 4000,
     /* 
     three methods of object food
     */
     preparation: function() {
        return 'fired';
     },
     farm: function() {
         return 'loam soil';
     },
     storage: function() {
         return 'hard disk';
     }
 };
 /*console.log(typeof(food));
 console.log(food.name);
*/
console.log(food.preparation());
 
