//Type of Events

function changeText(obj) {
    obj.innerHTML = "Learning JavaScript";
}
function showDate() {
    document.getElementById("demo").innerHTML = Date();
}

function myFunction() {
    let x = document.getElementById("text");
    x.value = x.value.toUpperCase();
}

function mouseOver(obj) {
    obj.innerHTML = "Hi you are in the section.Welcome!";
}

function mouseOut(obj) {
    obj.innerHTML = "Ohm!! you are out of the section! Come to us!!! dont go lamasab.."
}