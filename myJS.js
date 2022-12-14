let firstName = "Yashar";
let lastName = "Talat";

let person = {
    firstName:"Amin",
    lastName:"Talatiiiii",
    fullName:function() {
        return this.firstName + this.lastName;
    }
}
alert(person.fullName());