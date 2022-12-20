
let width = window.innerWidth ||
document.documentElement.clientWidth ||
document.body.clientWidth;
;

let height = window.innerHeight ||
document.documentElement.clientHeight ||
document.body.clientHeight
;

document.getElementById("demo").innerHTML =
"Width = " + width + ",<br> Height =" + height;