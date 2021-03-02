//declaring handler validation
let validation = () => {
  var name = document.myForm.field1;
  var email = document.myForm.field2;
  var telephone = document.myForm.field3;
  var regarding = document.myForm.field4;
  var message = document.myForm.field5;
  //returning red border when the user submits empty field for name
  if (name.value == '') {
    name.style.border = '2px solid red';
  }
  //setting minimum length of the name
  let min = 4;
  if (name.value.length < min) {
    alert('please input a name of more than four character');
    name.style.border = '2px solid red';
    //dont proceed to submit data , hold on
    return false;
  }
  //setting all names to be strings no numbers in name
  // for multiple name use /^[a-zA-Z].*[\s\.]*$/
  var letters = /^[A-Za-z]+$/;
  if (name.value.match(letters)) {
    return true;
  } else {
    alert('Please your name shouldnt include numbers');
    name.style.border = '2px solid red';
    return false;
  }

  //vaidating email
  if (email.value == '') {
    email.style.border = '2px solid red';
    email.focus();
  }
//setting format for email
  let email1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(email1)) {
    return true;
  } else {
    alert('Please input a valid email');
    email.style.border = '2px solid red';
  }
};
