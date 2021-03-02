
var _ = require('lodash');

var pets = [
    {name: 'Fluffy', age: 6, color: 'red'},
    {name: 'Rex', age: 6, color: 'brown'},
    {name: 'Spot', age: 6, color: 'brown'},
];

var matches = _.forEach(pets, {color:'brown'});

console.log('here are our matches', matches);


//basic structure in use 
// .functionName(argument, iterate);

/**
 *  when updating a document in mongodb
 * use the merge function to loop through and merge the users
 */ 
var _ = require('lodash');

var user = {name: 'Ryan', last: 'Dwyer', age: 25, eyes:'brown'};
var updated = {name: 'Ryan', last: 'Dwyer', age: 26, eyes:'blue'};

var updatedUser = _.merge(user, updated);

console.log('result', updatedUser);

/**
 * chaining - chain all their functions together then yuo just call that function
 */


 /**
  * TAKE AWAYS 
  * givies more usage of native funcs in broswers
  * -lodash provides simple methods that solve common problems
  * useful for frontend and backend code
  * provides consistent cross-browser support
  * use _forEach instead (works on arrays, objects and strings)
  */

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

  console.log(_.add(2+2));
  console.log(_.upperCase('hassan'));
  console.log(_.map(todos[1]));
  