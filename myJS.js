let btn1 = document.getElementById("btn-1");
btn1.addEventListener("click", forward);

function forward() {
    window.history.forward();
}

let btn2 = document.getElementById("btn-2");
btn2.addEventListener("click", back);

function back() {
    window.history.back();
}