//Validation of form

function myFunction() {
    let x = document.forms["myform"]["strName"].value;

    if(x=="") {
        alert("Please enter something!!");
        return false;
    }
    x = Number(x);
    if(x) {
        alert("No number Fuck off!!1");
        return false;
    }
    try {
        if(x) throw "No number!!!";
    } catch (error) {
        alert("Error:" + error);
    }
    finally {
        document.getElementById("strName").value = "";
    }
}
