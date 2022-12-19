// Animation

function move() {
    let x = document.getElementsByClassName("ani__content")[0];
    let posit = 0;
    let id = setInterval(frame,10);
    function frame() {
        if(posit == 450) {
            clearInterval(id);
        }else{
            posit++;
            x.style.top = posit + "px";
            x.style.left = posit + "px";
        }
    }
}