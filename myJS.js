//Validation of form

function myFunction() {
   let strName = document.forms["myform"]["strName"].value;
   let email = document.forms["myform"]["email"].value;

   try {
    if(strName == "") throw "Please Enter name!!!";
    strName = Number(strName);
    if(strName) throw "dont enter number!!";
    if(email == "") throw "Please enter email...";
    email = Number(email);
    if(email) throw "Not valid";
   } catch (error) {
    alert("Error:"+error);
   }
   finally {
    document.getElementById("tex").value = "";
    document.getElementById("mail").value = "";
    return false;
   }
}
