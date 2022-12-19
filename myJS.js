//Control inputs of Function

function sum(a, b) {
    if (a === undefined) {
        a = 0;
    }
    if (b === undefined) {
        b = 0;
    }
    return a + b;
}
alert(sum());

function multiply(x = 14, y = 10) {
    return x * y;
}
alert(multiply());

function argument() {
    for (let index = 0; index < argument.length; index++) {
        document.write(argument[index] + "<br>");
    }
}
argument("Yashar","Talat",19,"Tabriz",true,"Learning","uni Azad");