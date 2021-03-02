// /**
// // declaration with javascript demo
// let a;
// let b;
// let c;

// var d;
// var e;
// var f;

// // syntax(rules and regulations that govern a language) and semantics(meaning)
// //declaraction in python
// a = 10
// b = 20
// c = 25
// //declaration in VB-visual base
// dim a = 20;
// dim b;
// dim c;
// //declaration in java or c or c# or c++
// int a;
// float b = 1.0;


// **/



// // let num1 = 10;
// // //let num2 = 20;
// // const num3 = 100;
// // //num3 = 200;
// // num1 = 100;
// // let ans = num1 + num2;

// // //printing the answer 
// // console.log(ans);


// let name = 'May';
// let num = 69;
// let num2 = 7;
// let num3 = [2,3, num2];
// let num4 = null;
// let num5 = true;
// //types of data types: numbers,strings,boolean and objects
// //primitive datatypes : numbers,strings,boolean
// //composite dataypes: array,object

// //identifying the data types
// console.log(num != num2);


// let mynums = [10,20,30,5.3,'Sue', [40, 50, [60, 70,[90,100]]],200];

// //console.log(mynums)
// console.log( mynums[0] + mynums[5][0]) 
// mynums [5][1];
// console.log(mynums[5][2][1]);
// console.log(mynums[6])

//operators

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// let ans = num1 % num2
// console.log(ans)

//conditions and loops in javascript
let num1 = 20;
let num2 = 30;
let num3 = 40;
let mynums = [10,30,40,5.3,'dintaine',[40,50,[40,30]]];
// if(num1>=num1){
//     console.log(num1);
// }else 
// //let ans = num1 < num2 ? num1 : num2;

// for(i=1; i<num1; i++){
//     console.log(i);
// };


for(i=0; i<=num3; i+=4){
    if(i%2 ===0) {
        console.log(i);
    }
}


//rewrite using shorter code 

// let result = i%2 == 0? console.log(i):0
// console.log(result)

function even(){
    for(i=0; i<=num3; i+=4){
        if(i%2 == 0){
            console.log(i);
        }
    }
}
even();




function hassan(){
    let ans = 40 + 10;
    return ans;
}
hassan()

function paye(){
    let pay = 1000000;
    let charge = 30;
    const a = 100;
    let total = (charge/a)*pay;
    let totalPay = pay - total;
    return totalPay;
}        

function nssf(){
    let pay = 11;
    const b = 100;
    totalNssf = (pay/b)*paye();                        
    let nssf = paye() - totalNssf
}

//re-write PAYE
function paye1(pay, charge, a){
    let total = (charge/a)*pay;
    let totalPay = pay - total;
    return totalPay;
}

function nssf1(pay, b){
    totalNssf = (pay/b)*paye(1000000, 30, 100);
    let nssf = paye(1000000, 30, 100) - totalNssf;
}

nssf1(11, 100);


