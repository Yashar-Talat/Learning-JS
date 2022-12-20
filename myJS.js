//create pop-up 

let btn = document.getElementById("btn");
btn.addEventListener("click", myFunction);

function myFunction() {
    let text = "";
    let firstName = prompt("Enter Name:");
    let lastName = prompt("Enter LastName:");
    if (firstName == "" || lastName == "") {
        text = "Emptyyy!!!";
    } else if (firstName == Number(firstName) || lastName == Number(lastName) ) {
        text = "OHM!Not Number Just Name!";
    } else {
        text = "Hello"+ " " + firstName + " " + lastName;
    }
    document.getElementById("demo").innerHTML = text;
}