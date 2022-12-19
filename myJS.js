//Work with DOM (Document object moudle)

function myFunction() {
    let x = document.forms["myForm"];
    let text = "";

    for(let i = 0;i<x.length;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}