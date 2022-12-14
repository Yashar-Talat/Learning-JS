function myFunction() {
    let x, message;
    x = document.getElementById("demo").value;
    message = document.getElementById("p1");

    try {
        if (x == "") throw "Enter number!!fuck you";
        if (isNaN(x)) throw "input should be number!";

        x = Number(x);
        if (x < 7) throw "Lower than 7!";
        if (x > 15) throw "higher than 15!";

    } catch (error) {
        message.innerHTML = "ERORR:" + error;
    } finally {
        document.getElementById("demo").value = "";
    }
}