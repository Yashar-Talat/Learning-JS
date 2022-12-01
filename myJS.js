var person = {
 name : "Yashar",
 family : "Talat",
 age : 19,
 fullName : function() {
    return this.name + this.family;
 }   
};
console.log(person.fullName());
console.log(person.age);
console.log(person);