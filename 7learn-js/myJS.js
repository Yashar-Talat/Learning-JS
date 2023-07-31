var x;
x = 10;
x = null;
var test1 = ""; // empty
console.log(test1);
console.log(x);
console.log(typeof x); // object 
var obj = {
    name:"yashar",
    age:20,
    country:"IRAN"
}
console.log(obj);
obj = null;
console.log(obj);//null

var sa = {};
console.log(sa);
var num1 = 10;
var num2 = 15;
var sum = num1 + num2 + "Yashar";
console.log(sum);
sum = "Yashar" + num1 + num2;
console.log(sum);


var u = new Array(10);
u[9] = "yashar";
console.log(u[9]);
console.log(u[8]); // undefined