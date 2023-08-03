var student = {
    name : "Yashar",
    family : "Talat",
    age:19,
    walk : function(){
        var i = 0;
        while(i < 100) {
            i++;
            console.log("--");
        }
    }
    , 
    'class name' : "c1"
}
student.walk();
console.log(student['class name']);