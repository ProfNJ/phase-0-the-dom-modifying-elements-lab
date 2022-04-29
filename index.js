// Write your code here!
document.body.removeChild(document.body.querySelector("main"))
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Rory is the champion";
document.body.append(newHeader);
