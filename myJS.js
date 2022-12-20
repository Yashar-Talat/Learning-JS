//styling to all tags such as <p></p> tags

let element = document.getElementById("btn");
element.addEventListener("click",myFunction);
function myFunction() {
    let tags = document.getElementsByTagName("p");
    for(let i = 0;i<tags.length;i++) {
        tags[i].style.backgroundColor = 'black';
        tags[i].style.color = 'yellow';
        tags[i].style.width = '50px';
        tags[i].style.textAlign = 'center';
    }
}