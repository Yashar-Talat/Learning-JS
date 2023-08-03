var key = "className";
var student = {
    name: "Yashar",
    family: "Talat",
    age: 19,
    walk: function () {
        var i = 0;
        while (i < 100) {
            i++;
            console.log("--");
        }
    }
    ,
    'class name': "c1",
    [key]: "c2"
}
// student.walk();
// console.log(student['class name']);
console.log(student.className);
console.log(student[key]);

if (student.name != undefined) {
    console.log("name exists!");
}

for (pName in student) {
    console.log(pName);
    console.log(student[pName]);
    if (typeof student[pName] == "function") {
        student[pName]();
      }
}

