function hello() {
    alert("Hello World!!!!");
}
hello();
function calcSum() {
    var x = 5;
    var y = 10;
    return x * y;
}
alert(calcSum());
document.getElementById("res").innerHTML = calcSum();
function fullName() {
    var name = "Yashar";
    var family = "Talat";
    return name + family;
}
document.getElementById("pa").innerHTML = fullName();