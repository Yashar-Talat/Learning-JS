// differences between x++ and ++x
var x = 0;
var test1 = x++;
console.log("x =" + x + " "+ "test1 = " + test1);

var test2 = ++x;
console.log("x =" + x + " "+ "test2 = " + test2);

var y = 0;
var test3 = y--;
console.log("y =" + y + " "+ "test3 = " + test3);

var test4 = --y;
console.log("y =" + y + " "+ "test4 = " + test4);

//operators

var a = 5;
var b = 10;
console.log(a);
console.log(++a);
console.log(a);

var h = 5;
var t = 25;
h += t;
console.log(h);
h*= t;
console.log(h);
// console.log(a**2);
console.log(a = a / b);

var r = 25;
var e = 10;
console.log(r%e);
