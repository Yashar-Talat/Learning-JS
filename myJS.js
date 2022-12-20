//create pop-up 

let btn = document.getElementById("btn");
btn.addEventListener("click", myFunction);

function myFunction() {
    let text = "";
    let person = prompt("Enter Name:");
    if (person == "") {
        text = "Emptyyy!!!";
    } else if (person == Number(person)) {
        text = "OHM!Not Number Just Name!";
    } else {
        text = "Hello"+ " " + person;
    }
    document.getElementById("demo").innerHTML = text;
}