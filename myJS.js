//Validation of form

function myFunction() {
    let x = document.forms["myform"]["strName"].value;

    if(x=="") {
        alert("Please enter something!!");
        return false;
    }
    x = Number(x);
    try {
        if(x) throw "No number!!!";
        // return false;
    } catch (error) {
        alert("Error:" + error);
        // return false;
    }
    finally {
        document.getElementById("tex").value = "";
        return false;
    }
}
