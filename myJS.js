let element = document.createElement("p");
let text = document.createTextNode("this created by JS");
element.appendChild(text);

var parent = document.getElementById("div1");
// var child = document.getElementById("p1");
var child = document.getElementById("p3");
parent.insertBefore(element,child);

