var names = ["YASHAR", "Amin", "Amir", "Ata", "Omid"];
var element = document.getElementById("res");
var text = "";

for (var i = 0; i < names.length; i++) {
text += names[i] + "<br/>";
}
element.innerHTML = text;