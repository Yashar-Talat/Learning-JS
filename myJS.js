function Sum() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    sum = num1 + num2;
    document.getElementById("result").innerHTML = sum;
}