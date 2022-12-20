//remain from 24
document.getElementById("btn").addEventListener("click", function () {
    alert("Hi man!Welcome to our country!! what should i do?");
});

let x = document.getElementById("big-btn");
x.addEventListener("mouseover", mouseOver);
x.addEventListener("mouseout", mouseOut);
x.addEventListener("click", clickOn);

function mouseOver() {
    document.getElementsByClassName("p1")[0].innerHTML += "MouseOver <br>";
    let x = document.getElementById("big-btn");
    x.style.backgroundColor = 'black';
    x.style.color = 'orange';
}

function mouseOut() {
    document.getElementsByClassName("p1")[0].innerHTML += "MouseOut <br>";
    let x = document.getElementById("big-btn");
    x.style.backgroundColor = 'orange';
    x.style.color = 'black';
}

function clickOn() {
    document.getElementsByClassName("p1")[0].innerHTML += "ClickOn!  <br>";
    let x = document.getElementById("big-btn");
    x.style.color = 'black';
    x.style.backgroundColor = 'red';
}