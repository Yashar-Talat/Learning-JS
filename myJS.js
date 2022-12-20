
function myFunc() {
    let text = "";
    let age = prompt("Enter Age:");
    let id = prompt("Enter Id:");
    if(age == "" || id == "") {
        text = "Empty!Please Fill the blank!"
    }else if (age == isNaN || id == Number(id)) {
        text = "Please write correct information";
    }else {
        text = "I am Yashar Talat with id" + " " + id + " ," + "with age:" + " " + age;
    }
    document.getElementById("demo").innerHTML = text;
}
