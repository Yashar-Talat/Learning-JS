let aTag = document.createElement("a");
let link = document.createTextNode("https://github.com/Yashar-Talat");
aTag.appendChild(link);

let parent = document.getElementById("div1");
let child = document.getElementById("p1");
parent.insertBefore(aTag,child);


