//Introduce type of function in js

let x = new Function("A","B", "return A*B");
alert(x(10,15));
let strName = new Function("name","LastName","Age","return name+ LastName+ Age");
document.write(strName("Yashar","Talat","20"));