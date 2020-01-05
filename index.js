// Removing the `main` div
document.querySelector("#main").remove();


let newH1 = document.createElement("h1");
newH1.setAttribute("id", "victory");
document.body.appendChild(newH1)

let newHeader = document.querySelector('h1#victory');
let txt = document.createTextNode("Dut is the champion");
// Adding text to its container
newHeader.appendChild(txt);

