const fName = document.myForm.field1;
const fEmail = document.myForm.field2;
const fPhone1 = document.myForm.tel_no_1;
const fPhone2 = document.myForm.tel_no_2;
const fPhone3 = document.myForm.tel_no_3;
const fRegarding = document.myForm.field4;
const fMessage = document.myForm.field5;

//function nameFocus containing what happens when  the fucntion is invoked
let nameFocus = () => {
    fName.style.border = '2px solid red';
}
/**
 * adding an event listener 
fName.addEventListener('focus', nameFocus);
bluring when the input field is field then away
fName.addEventListener('blur', nameFocus);
**/

